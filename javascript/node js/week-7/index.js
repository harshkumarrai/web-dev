const express=require('express');
const app=express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const JWT_Secret="Iluvukaruna";
const bcrypt=require('bcrypt')
mongoose.connect('mongodb+srv://harshkumarrai98:QR2S67X6iyFhI6dU@clusteer.v3nwn.mongodb.net/todo2');
app.use(express.json());
const {UserModel,TodoModel}= require('./db');
const {z}=require('zod');
app.post('/signup',async function(req, res){
    const requiredBody=z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password: z.string().min(3).max(30)
        // password: z.string().min(3).max(30).validate() u can write function to check uppercase characters etc and diff conditions
    });
    const parsedwithsucess=requiredBody.safeParse(req.body);
    if(!parsedwithsucess){
        res.json({
            message: "incorrect format",
            error : parsedwithsucess.error
        })
        return;
    }

    const email=req.body.email;
    const password=req.body.password 
    const name=req.body.name;
    const hashedpassword=await bcrypt.hash(password,5);
    await UserModel.create({
        email:email,
        password:hashedpassword  , 
        name:name
    })
    res.json({
        message:"u are logged in"
    })
});

app.post('/signin',async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const User=await UserModel.findOne({
        email:email,
    })
    if(!User){
        res.status(403).json({
            message:"user does not exist"
        })
        return;
    }
    //compare password  
    const match =await bcrypt.compare(password,User.password);
    console.log(User);
    if(User){
        const token=jwt.sign({
            id:User._id.toString()
        },JWT_Secret);
    res.json({
        token:token
    })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
});

app.post('/todo',function(req,res){
    
});

app.post('/todos',function(req,res){
    
});
function auth(req,res,next){
    const token=req.headers.token;
    const decodeddata=jwt.verify(token,JWT_Secret);
    if(decodeddata){
        req.user_id=decodeddata.id;
        next();
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
}
app.listen(3000);   


