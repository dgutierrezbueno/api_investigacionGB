const express=require('express'); // sintaxis para importar modulos en nodejs

require('dotenv').config();
//const { connect } = require('mongoose');

const {dbConection}=require('./config/database');
const cors=require('cors');


//crear servidor
const app=express();
// estableciendo config
app.use(cors());
app.use(express.json());

// crear  la conexion  BD
dbConection();

// verificando variables de entorno
//console.log(process.env);

// Crando las rutas de mi app
 
//rutas api proyectos
app.use('/api/usuarios',require ('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));


// codigo para desplegar el servidor 
app.listen(process.env.PORT,()=> {
console.log('Servidor Nodejs desplegado en el puerto:'+ process.env.PORT)
})

