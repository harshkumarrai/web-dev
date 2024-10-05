const express=require('express');
const app=express();  
const jwt=require('jsonwebtoken');
const JWT_SECRET="iluvukaruna"
mongoose.connect()
app.use(express.json());
const{UserModel,TodoModel}=require("./db");
const { default: mongoose } = require('mongoose');
app.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"you are logged in"
    }) 
});

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const user=await UserModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id
        });
        res.json({
                token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
});
app.post("/todo",(req,res)=>{

})
app.get("/todos",(req,res)=>{
      
})
app.listen(3000);
