const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");

module.exports={
    sendMessage:async (req,res)=>{
        const {sender,chat,message}=req.body;
        try{
            var result = await Message.create({sender,message,chat});
            console.log(result);
            await Chat.findOneAndUpdate({_id:chat},{latestMessage:result._id});
            
            return res.status(200).json(result);
        }catch(err){res.status(500).json(err);}
    },
    getMessages:async (req,res)=>{

        const {chatId}= req.params;
        // console.log(req.body);
        // console.log(chatId);
        try{
            const result = await Message.find({chat:chatId});
            return res.status(200).json(result);
        }catch(err){console.log(err); return res.status(500).json(err.message)}
    }
}