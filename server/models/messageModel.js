const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text : {
        type : String,
        default : ""
    },
    imageURL : {
        type : String,
        default : ""
    },
    seen : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

const Message = mongoose.model('Message',messageSchema)

module.exports = Message