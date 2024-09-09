const express = require('express')
const {Server} = require('socket.io')
const { createServer} = require('http')


const app = express()
const server = createServer(app)

const io = new Server({
    cors: {
        origin : process.env.FRONTEND_URI,
        credentials : true
    }
})

io.on('connection',(socket)=>{
    console.log(`user ${socket.id} has connected`)


    io.on('disconnect',(socket)=>{
        console.log(`user ${socket.id} has disconnected`)
    })
})