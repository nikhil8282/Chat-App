const jwt = require("jsonwebtoken");
function genToken(id){
    return  jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}
function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET,);
}
module.exports = {genToken,verifyToken};