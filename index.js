const express=require('express'); // sintaxis para importar modulos en nodejs

require('dotenv').config();
//const { connect } = require('mongoose');

const {dbConection}=require('./config/database');
const cors=require('cors');


//crear servidor
const app=express();
// estableciendo config
app.use(cors());

// crear  la conexion  BD
dbConection();

// verificando variables de entorno
//console.log(process.env);

// Crando las rutas de mi app
app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg: 'Bienvenidos a la App Proyectos'
    });
});



// codigo para desplegar el servidor 
app.listen(process.env.PORT,()=> {
console.log('Servidor Nodejs desplegado en el puerto:'+ process.env.PORT)
})

