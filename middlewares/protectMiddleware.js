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
        console.log(err);
        // throw new Error("user is expired")
        return res.status(401).json(err);
    }
}
module.exports=protectMiddleware;