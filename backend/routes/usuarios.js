const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();



//conectar con la base de datos
const {connection} = require("../config.db");



//Metodos GET, POST, DELETE 


const getBaseUsuarios = (request, response) => {
    connection.query("CALL getUsuariosDB()", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results[0]);
    });
};

const getUsuario = (request, response) => {
    const id = request.params.id;
    connection.query("CALL getUsuario(?)", [id],
        (error, results) => {
            console.log(results);
            if (error) throw error;
            response.status(200).json(results[0]);
        });
};


const postUsuario = (request, response) => {
    const { id_usuario, id_tipo_documento, nombre_usuario, id_ciudad, direccion, rol, estado, contraseña_usuario, correo_usuario, telefono_usuario } = request.body; 
    connection.query("CALL createUsuario(?,?,?,?,?,?,?,?,?,?)",
     [id_usuario, id_tipo_documento, nombre_usuario, id_ciudad, direccion, rol, estado, contraseña_usuario, correo_usuario, telefono_usuario],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos creados correctamente": results[0] });
    });
};


const putUsuario = (request, response) => {
    const { id_tipo_documento, nombre_usuario, id_ciudad, direccion, rol, estado, contraseña_usuario, correo_usuario, telefono_usuario, id_usuario } = request.body;    
    connection.query("CALL updateUsuario(?,?,?,?,?,?)",
     [id_tipo_documento, nombre_usuario, id_ciudad, direccion, rol, estado, contraseña_usuario, correo_usuario, telefono_usuario, id_usuario],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos actualizados correctamente": results });
    });
};


const deleteUsuario = (request, response) => {
    const {id} = request.params;    
    connection.query("CALL deleteUsuario(?) ",
     [id],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({ "datos eliminados exitosamente": results.affectedRows });
    });
};





app.route("/usuario").get(getBaseUsuarios);
app.route("/usuario/:id").get(getUsuario);
app.route("/usuario").post(postUsuario);
app.route("/usuario").put(putUsuario);
app.route("/usuario/:id").delete(deleteUsuario);

module.exports = app;