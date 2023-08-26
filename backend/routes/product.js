const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();



//conectar con la base de datos
const {connection} = require("../config.db");



//Metodos GET, POST, DELETE 

const getBaseProductos = (request, response) => {
    connection.query("CALL getProductsDB()", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results[0]);
    });
};

const getProducto = (request, response) => {
    const id = request.params.id;
    connection.query("CALL getProduct(?)", [id],
        (error, results) => {
            console.log(results);
            if (error) throw error;
            response.status(200).json(results[0]);
        });
};


const postProductos = (request, response) => {
    const { nombre_producto, id_categoria, precio, stock, stock_minimo } = request.body; 
    connection.query("CALL createProduct(?,?,?,?,?)",
     [nombre_producto, id_categoria, precio, stock, stock_minimo],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos creados correctamente": results[0] });
    });
};


const putProductos = (request, response) => {
    const { nombre_producto, id_categoria, precio, stock, stock_minimo, id_producto } = request.body;    
    connection.query("CALL updateProduct(?,?,?,?,?,?)",
     [nombre_producto, id_categoria, precio, stock, stock_minimo, id_producto],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos actualizados correctamente": results });
    });
};


const deleteProductos = (request, response) => {
    const {id} = request.params;    
    connection.query("CALL deleteProduct(?) ",
     [id],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos eliminados exitosamente": results.affectedRows });
    });
};





app.route("/product").get(getBaseProductos);
app.route("/product/:id").get(getProducto);
app.route("/product").post(postProductos);
app.route("/product").put(putProductos);
app.route("/product/:id").delete(deleteProductos);

module.exports = app;