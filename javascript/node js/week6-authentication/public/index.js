const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const  JWT_SECRET="iloveukaruna";
app.use(express.json());
const users=[];
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let found =null;
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"sucesffuly signed in"
    })

}
)
app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let found=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
                found=users[i];
                break;
        }
    }
    if(found){
        //generate token
        const token=jwt.sign({
            username:found.username
        },JWT_SECRET);
       res.header("jwt",token);  //
        res.json({
            token:token
        })
    }else{
        res.json({
            message:"invalid credentials"
        })
    }
})
//give token to server and verify it
//1st verify token use middlware
function auth(req,res,next){
    const token=req.headers.token;
    const decodedata=jwt.verify(token,JWT_SECRET);
    if(decodedata.username){
        req.username=decodedata.username;
        next();
    }else{
        res.json({
            message:"invalid credentials"
        })
    }
} 
app.get('/me', auth,(req,res)=>{
    const username=req.username;
    let found=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            found=users[i];
        }
    }
    if(found){
            res.json({
                username:found.username,
                password:found.password
            })
    }else{
        res.json({
            message:"invalid credentials"
        })
    }
})
app.listen(3000);