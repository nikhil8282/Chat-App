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
app.listen(8000,()=>{console.log(`server is running on port ${process.env.PORT}`);})