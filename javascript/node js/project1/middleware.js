const express=require('express');
const app=express();
//fucntion that returs boolean thatperson age is greater than 14 or not
app.use(express.json());
 function isbool(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            mess:"sorry u are out of age"
        })
    }

 }
 app.use(isbool);  
 app.get('/ride1',(req,res)=>{
    res.json({
        mess : "ride done sucessfully"
    })
 })
 
app.listen(3000);
  
