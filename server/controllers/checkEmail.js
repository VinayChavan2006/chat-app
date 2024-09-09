const User = require('../models/UserModel')


const checkEmail = async(req,res)=>{
    try {
        const {email} = req.body
        const user = await User.findOne({email}).select("-password")
        if(!user)
        {
            res.status(400).json({
                message : "User not found"
            })
        }
        res.status(200).json({
            data : user
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = checkEmail