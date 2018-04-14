const argv=require("./confi/yargs.js").argv;
const {crearTable,listarTabla}=require("./operaciones/multiplicar.js");
const colors = require('colors');
const comando= argv._[0];

switch(comando){
    case 'listar':
    listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
    //creat nueba tabla
    crearTable(argv.base,argv.limite).then((datos)=>{
        console.log(colors.green(`${datos}`));
       }).catch(function(err){
        console.log(colors.red(err));
       })
    break;
    default:
    console.log("Este comando no se reconoce");

}
//  console.log(comando)
