const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

const getUserDetailFromToken = (token)=>{
    if(!token){
        return {
            message : "session expired"
        }
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    const user = User.findById(decode.id).select("-password")

    return user

}

module.exports = getUserDetailFromToken