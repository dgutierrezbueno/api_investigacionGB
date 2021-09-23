const mongoose = require('mongoose');
const dbConection = async() => {
try {
         //mongodb+srv://adminproject:J4ZzT5r5HQTuaZlK@cluster0.ts8xf.mongodb.net/proyectosdb
            //Debemos utilizar la cadena de conexion que tenemos en mongocompass
     await mongoose.connect(process.env.DB_CNN);//
     console.log('Conexion exitosa a la BD')
} catch (error) {
     console.log(error);
     throw new Error('Error al conectar a la BD');
      }
}
module.exports ={
  dbConection
}