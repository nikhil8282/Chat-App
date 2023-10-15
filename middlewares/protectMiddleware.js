const { verifyToken } = require("../config/tokenConfig");
const Users = require("../models/usersModel");

const protectMiddleware =async(req,res,next)=>{
    try{
    const {authorization}=req.headers;
    if(!authorization || !(authorization.startsWith('Bearer'))){
        throw new Error("user is not logged in!");
    }
    const token=authorization.split(" ")[1];
        const {id}=verifyToken(token);
        req.user=await Users.findById(id).select("-password");
        // console.log(req.user);
        next();
    }
    catch(err){
        return res.status(500).json(err);
    }
}
module.exports=protectMiddleware;