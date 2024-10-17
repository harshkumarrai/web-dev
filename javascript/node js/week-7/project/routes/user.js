//route import
const {Router}=require('express');
const jwt=require('jsonwebtoken');
const { UserModel, purchaseModel, courseModel } = require('../db');
const { JWT_USER_PASSWORD } = require('../config');
const userRouter=Router();
const {userMiddleware}=require('../middleware/user');
userRouter.post('/signup',async function(req,res){
    const {email,password,firstname,lastname}=req.body;
    await UserModel.create({
       email,
       password,
       firstname,
       lastname,
    });
    res.json({
        message:'Signup sucessful'
    })
})

userRouter.post('/signin',async function(req,res){
    const {email,password}=req.body;
    const user=await UserModel.findOne({
        email,
        password,
    })
    if(user){
        const token=jwt.sign({
            id:user._id,
        },JWT_USER_PASSWORD);
        
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }

})

userRouter.get('/purchases',userMiddleware,async function(req,res){
    const userId=req.userId;
    const purchases=await purchaseModel.find({
        userId
    })
    let purchasedCourseIds=[];
    for(let i=0;i<purchases.length;i++){
        purchasedCourseIds.push(purchases[i].courseId);
    }
    const coursesData=await courseModel.find({
        _id:{$in:purchasedCourseIds}
    })
    res.json({
        purchases,
        coursesData
    })
})

module.exports={
    userRouter
}