//requiriendo funciones de las operaciones y creando una destructuracion 

const opts={
    base:{
        demand:true, 
        alias: 'b'
     },
     limite:{
         alias: 'l',
         default:10
 
     }
}

const argv=require('yargs')
.command('listar','Imprimir en consola la tabla digitada',opts)
.command('crear','Para crear tabla',opts)
.argv;

module.exports={
    argv
}