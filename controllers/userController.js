const User = require("../models/usersModel");
const genToken = require("../config/tokenConfig")
async function signUpHandler(req,res){
    
    const {name,email,password,profilePic}=req.body;
    try{
    if(!name || !email || !password ){
       throw new Error("Enter all the Missing fields!");
    }

        const userExists = await User.findOne({email});
        if(userExists){
          
            throw new Error("your email is already registered!");
        }
   
        const newUser =await User.create({name,email,password,profilePic});
        res.status(200).json({
            _id:newUser._id,name:newUser.name,email:newUser.email,pic:newUser.profilePic,token: genToken(newUser._id)
        })
    }
    catch(err){
        
        return res.status(500).json(err.message);
    }  
}
async function loginHandler(req,res){

    const {email,password}=req.body;
    try{
        if(!email || !password){
            throw new Error("Please enter all the fields!");
        }
        const user = await User.findOne({email});
     
        if(!user)throw new Error("Email is not registerd!");
        if(await user.comparePassword(password))
        res.status(200).json({
    _id:user._id,name:user.name,email:user.email,profilePic:user.profilePic
});        
else throw new Error("Password is incorrect!");
    }
    catch(err){
        res.status(500).json(err.message);
    }  

}
module.exports ={signUpHandler,loginHandler};