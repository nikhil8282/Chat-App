const mongoose = require('mongoose');
const messageModel = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    message:{type:String,trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:'Chat'}
},{
    timeStamp:true
});
const Message = mongoose.model('Message',messageModel);
module.exports = Message;