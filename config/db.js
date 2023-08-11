const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`database in connected host: ${conn.connection.host}`);
    }
    catch(err){
        console.log(err.message);
        process.exit();
    }
}
module.exports = connectDb;