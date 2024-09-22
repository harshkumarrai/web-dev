const fs=require('fs');
function  z (x){
    fs.readFile(x,"utf-8",function(err,data){
        if(err){
            console.log("error");
        }else{
            let cnt=0;
            for(let i=0;i<data.length;i++){
                if(data[i]==" ")cnt++;
            }
            console.log(cnt+1);
        }
       
    })
}
if(process.argv[2]=="-h"){
    console.log("help");
}else{
z(process.argv[2]);
}
//console.log(process.argv);
