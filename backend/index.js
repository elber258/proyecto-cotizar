const express = require("express");
const app = express();


//Analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

 
//Archivo de rutas definidas
app.use(require('./routes/productos'));


app.listen(3300,() => {
    console.log("Servidor ejecutandose en el puerto 3300");
});

 

module.exports = app;