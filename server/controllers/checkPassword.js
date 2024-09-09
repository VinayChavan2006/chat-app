const User = require("../models/UserModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const checkPassword = async (req,res) => {
    try {
        const {password,userId} = req.body
        const user = await User.findById(userId)

        const verifyPassword = await bcrypt.compare(password,user.password)
        if(!verifyPassword){
            res.status(400).json({
                message : "Incorrect Password"
            })
        }
        const tokenData = {
            id : user._id,
            email : user.email
        }
        const token = jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn: "1d"})

        return res.cookie("token",token,{
            httpOnly : true,
            secure : true
        }).json({
            message : "Token created successfully",
            token 
        })


    } catch (error) {
        res.status(400).json({ 
            message : error.message
        })
    }
}

module.exports = checkPassword