const express= require('express');
const app =express();
 app.use(express.json());
 const jwt=require('jsonwebtoken');
 const JWT_SECRET="randomharksijhdiloveu"
;const users=[];
function generateToken(){
    return Math.random();
}
 app.post('/signup',(req,res)=>{
    //input validation
    const usernae=req.body.username;
    const password=req.body.password;
    
    users.push({
        username: username,
        password: password
    })

 })

 app.post('/signin',(req,res)=>{
    
 })

 app.listen(3000);