const express = require("express");
const app = express();

 

const dotenv = require("dotenv");
dotenv.config();



//conectar con la base de datos
const {connection} = require("../config.db");

//Utilizando el método Get 
const getProductos = (request, response) => {
    connection.query("SELECT * FROM productos", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta de consumo
app.route("/productos")
.get(getProductos);




// Utilizando el Metodo post

const postProductos = (request, response) => {
    const {nombre, precio, stock} = request.body;    
    connection.query("insert into productos(nombre,precio,stock) values ( ?, ? , ?)",
     [nombre, precio, stock],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json([ 'success','Producto guardado']);
    });
};

//ruta de consumo
app.route("/productos")
.post(postProductos);


// usando el metodo delete

const deleteProductos = (request, response) => {
    const {id} = request.params;    
    connection.query("delete from productos where id=?",
     [id],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json([ 'success','Producto Eliminado']);
    });
};

//ruta de consumo
app.route("/productos/:id")
.delete(deleteProductos);

// usando el metodo put
const putProductos = (request, response) => {
    const {nombre, precio, stock,id} = request.body;    
    connection.query("update productos set nombre=?, precio=?, stock=? where id=?",
     [nombre, precio, stock,id],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json([ 'success','Producto Modificado']);
    });
};

//ruta de consumo
app.route("/productos")
.put(putProductos);

module.exports = app;