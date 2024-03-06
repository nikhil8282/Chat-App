const express = require('express');
const cors = require('cors');

const connectDb = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const env = require('dotenv');
const app = express();
app.use(express.json())

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-credentials",true);
    next();
})
app.use(cors({
    origin:"http://localhost:3000"
}))
env.config();
connectDb();

app.use('/api/auth',authRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);

const server = app.listen(8000,()=>{console.log(`server is running on port ${process.env.PORT}`);})
const io=require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
        origin:"http://localhost:3000",
    },
});


io.on("connection",(socket)=>{
    socket.on('setUp',(id)=>{
        socket.join(id);
        socket.emit('connected');
    })
    socket.on('joinRoom',(id)=>{
        socket.join(id);
        console.log("user join room "+id);
    })
    socket.on('newMessage',(data)=>{
        let {chat}
    })
    // console.log("socket connected"+socket.id);
})
