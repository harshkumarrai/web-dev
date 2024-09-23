 const express=require('express');
const app= express();
app.get('/',(req,res)=>{
    let x=3;
   res.send(x.toString);
    
})
app.listen(3000);