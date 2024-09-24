const express= require('express');
const app= express();
let obj=[{
    name :"harsh",
    kidney:"healthy"
}]

app.get('/',(req,res)=>{
   let tot=0;
   let kid=0;
   let notkid=0; 
    for(let i=0;i<obj.length;i++){
        if(obj[0].kidney=="healthy"){
            kid++;
        }
        tot++;
    }
    notkid=tot-kid;
    const hh={
        total_patient: "0",
        total_healthy_kidneys: kid.toString(),
        total_unhealthy_kidney: notkid.toString()
    }
    res.send(hh);
})

app.post('/',(req,res)=>{
    const objj=req.body
    obj.push(objj);
   
    res.json({
      mess: "done"
    })
})
app.put('/',(req,res)=>{
    if(obj.length==0)res.json({mess:"aa"})

    for(let i=0;i<obj.length;i++){
        obj[i].kidney="nothealthy";
    }
   res.json({}); 
})
app. delete('/',(req,res)=>{
        
})
app.listen(3000);