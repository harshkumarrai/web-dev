const express= require("express");
const app= express();
app.get('/multiply',(req,res)=>{
    let a= req.query.a;
    let b=req.query.b;
    // these numbers come as string  use parseint 
    a=parseInt(a);
    b=parseInt(b);
    //let c= a1*b1;
    res.send((a+b).toString());
})
app.get('/multiply/:a/:b',(req,res)=>{
    let a= req.params.a;
    let b=req.params.b;
    // these numbers come as string  use parseint 
    a=parseInt(a);
    b=parseInt(b);
    //let c= a1*b1;
    res.json({
        "answer": a+b
    })
})
// app.get('/sum',(req,res)=>{
//     let a= req.query.a;
//     let b=req.query.b;
// })
// app.get('/subtract',(req,res)=>{
//     let a= req.query.a;
//     let b=req.query.b;
// })
// app.get('/divide',(req,res)=>{
//     let a= req.query.a;
//     let b=req.query.b;
// })
app.listen(3000);