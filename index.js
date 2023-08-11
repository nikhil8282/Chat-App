const express = require('express');
const connectDb = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const env = require('dotenv');
const app = express();
app.use(express.json())
env.config();
connectDb();
app.use('/user',userRoutes)
app.listen(8000,()=>{console.log(`server is running on port ${process.env.PORT}`);})