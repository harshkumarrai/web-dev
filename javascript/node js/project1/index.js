 const express=require('express');
const app= express();
app.get('/',(req,res)=>{
    let x=3;
    const x1=req.query.x1;
    x1+=10;
    let z=x1;;
    res.send(z.toString());
 //  res.send(x.toString);
    
})
app.listen(3000);