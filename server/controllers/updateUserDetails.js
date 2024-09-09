const User = require("../models/UserModel")
const getUserDetailFromToken = require("../Utils/getUserDetailFromToken")


const updateUserDetails = async (req,res) => {
    try {
        const token = req.cookies.token || ""

        const user = await getUserDetailFromToken(token)

        const {name,profile_pic} = req.body
        const update_user = await User.updateOne({_id:user._id},{
            name,
            profile_pic
        })

        const userInfo = await User.findById(user._id)
        return res.json({
            message : "Update Successful",
            data : update_user,
            user : user
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = updateUserDetails