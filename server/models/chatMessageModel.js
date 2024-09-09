const mongoose = require('mongoose')
const message = require('./messageModel')
const chatMessageSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    reciever : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    messages : [{
        type : mongoose.Schema.ObjectId,
        ref : 'Message'
    }]
},{
    timestamps : true
})

const ChatMessage = mongoose.model('ChatMessage',chatMessageSchema)

module.exports = ChatMessage