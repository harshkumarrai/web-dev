const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const JWT_secret="HARSH1234";
app.use(express.json());
const users=[];
app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        messsage: "sucessfully signed"
    })
})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let found=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            found=users[i];
        }
    }
    if(found){
        const token=jwt.sign({username
        }
        ,JWT_secret)
        res.header("jwt",token);
        res.json({
            token : token
        })
        
    }else{
        res.json({
            messsage:"invalid credentials"
        })
    }
})
 function auth (req,res,next){
    const token=req.headers.token;
    const decodedata=jwt.verify(token,JWT_secret);
    if(decodedata.username){
        req.username=decodedata.username;
        next();
    }else{
        res.json({
            message : "not logged in"
        })
    }
 }
app.post('/met',auth,(req,res)=>{
    //req me token pass hoga
    const token=req.headers.token;
    const decodedata=jwt.verify(token,JWT_secret);
    if(decodedata.username){
    let found=null;
    for(let i=0;i<users.length;i++){
            if(users[i].username==decodedata.username){
                found =users[i];
            }
    }
    if(found){
        res.json({
            username:found.username,
            password:found.password
        })
    }else{
        res.json({
            messsage : "unable to get credentials"
        })
    }
}else{
    res.json({
        messsage : "unable to get credentials"
    })
}
   
})
app.listen(3000);