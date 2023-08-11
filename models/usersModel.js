const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const usersModel = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'},
},{
    timeStamp:true
});

usersModel.methods.comparePassword = async function(password){
                        return await bcrypt.compare(password,this.password);
}

usersModel.pre("save",async function(next){
    if(!this.isModified)next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

const Users = mongoose.model('Users',usersModel);
module.exports = Users;