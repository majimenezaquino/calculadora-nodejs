const fs= require("fs");
const colors = require('colors');
//listar las tablas
let data ='';
   let listarTabla=(base,limite)=>{
    for(let i=1; i<=limite; i++){
        data+=`${base}*${i}=${base*i}\n`;
       }
       console.log(data)
   }
  let  crearTable=(datos,limite=10)=>{
      //crear una promesa
       return new Promise((resolve,reject)=>{
           let data='';
           if(!Number(datos)){
            reject(`Es valor introducido no es un numero`);
           
           }else{
               for(let i=1; i<=limite; i++){
                data+=`${datos}*${i}=${datos*i}\n`;
               }
               fs.writeFile(`./table-${datos}.txt`,data,(err)=>{
                 if(err){
                    reject(`Problema para crear la tabla-${datos}.txt`);
                 }else{
                      resolve(`Tabla creada con existo: tabla-${datos}.txt`);
                 }
               });
           }

       });
   }
module.exports={
    crearTable,
    listarTabla
}