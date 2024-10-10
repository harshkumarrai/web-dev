const express=require('express');
const app=express();
app.use(express.json());
const {UserModel,TodoModel}=require('./db');
const jwt=require('jsonwebtoken');
const JWT_Secret="iluvukaruna";
const mongoose=require('mongoose');
mongoose.connect(""); //

app.post('/signup',async function (req,res) {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    await UserModel.create({
        name:name,
        email:email,
        password:password
    })   
    res.json({
            message:"signed up sucessfully"
    })
})

app.post('/signin',async function (req,res) {
    const email=req.body.email;
    const password=req.body.password;
    const response =await UserModel.findOne({
        email:email,
        password:password
    })

    if(response){
        const token=jwt.sign({
            id:response._id.toString()
        },JWT_Secret)
    res.json({
        token
    })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }

app.post('/todo',auth)

})