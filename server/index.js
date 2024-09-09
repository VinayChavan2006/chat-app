const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/connectDB')
const router = require('./routes/route')
const cookieParser = require('cookie-parser')

const app = express();

const PORT = process.env.PORT || 8080
app.use(cookieParser())
app.use(cors({
    origin : process.env.FRONTEND_URI,
    credentials : true
}))
app.use(express.json())
app.use(express.urlencoded())

connectDB();

app.use('/api',router)


app.listen(PORT,(req,res)=>{
    console.log("server is running on port ",PORT);
})
