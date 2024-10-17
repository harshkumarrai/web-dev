const jwt=require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');
function userMiddlware(req,res,next){
    const token=req.headers.token;
    const decodedata=jwt.verify(token,JWT_USER_PASSWORD);
    if(decodedata){
        res.userId=decodedata.id
        next();
    }else{
        res.status(403).json({
            message:"u are not signed in"
        })
    }
}

module.exports({
    userMiddlware
})