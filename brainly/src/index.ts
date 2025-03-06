import express from "express"
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
const app=express();
const port=process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.post("/api/v1/post",(req,res)=>{

})