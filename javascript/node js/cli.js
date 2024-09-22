
const { Command } = require('commander');
const program = new Command();
const fs=require('fs');
program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

  program.command('x')
  .description('fin no of words')
  .argument('<file>', 'string to split')

   .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }else{
                let x= data.split(' ').length;
                console.log(`there are ${x} heh`);
            }
        })
   })
   program.parse();