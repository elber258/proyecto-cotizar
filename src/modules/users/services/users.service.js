const connection = require("../../../../config.db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = (req, res) => {
  const sqlCall = "CALL getUsersDB()";
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      throw error;
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  const sqlCall = `CALL getUser('${id}')`;
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

exports.postUserAuth = async (req, res) => {
  //Validacion de Email y Contraseña
  const { correo_usuario, contraseña_usuario: pass } = req.body;
  const jwtSecret = process.env.SECRET_AUTH;
  const credentials = {
    email: correo_usuario,
    password: pass,
  };
  const sqlCall = `CALL validateAuthentication('${correo_usuario}','${pass}')`;
  connection.query(sqlCall, async (error, rows) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      if (rows[0].length) {
        const { contraseña_usuario } = rows[0][0];
        const passwordHashlessValidate = contraseña_usuario === pass;
        const passwordHashValidate = await bcrypt.compare(
          pass,
          contraseña_usuario
        );

        if (passwordHashValidate || passwordHashlessValidate) {
          res.json({
            name: rows[0][0].nombre_usuario,
            email: rows[0][0].correo_usuario,
            token: jwt.sign(credentials, jwtSecret),
          });
        } else {
          res.json("ERROR_PASSWORD");
        }
      } else {
        res.json("USER_DOES_NOT_EXISTS");
      }
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const sqlCall = `CALL deleteUser('${id}')`;
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      if (rows.affectedRows != 0) {
        res.status(201).json("USER_DELETED_SUCCESFULLY");
      } else {
        res.json("NO_USER_TO_DELETE");
      }
    }
  });
};

exports.postCreateUser = async (req, res) => {
  const {
    id_usuario,
    id_tipo_documento,
    nombre_usuario,
    id_ciudad,
    direccion,
    rol,
    contraseña_usuario,
    correo_usuario,
    telefono_usuario
  } = req.body;

  const passHash = await bcrypt.hash(contraseña_usuario, 10);
  const sqlCall = `
  CALL createUser(
    '${id_usuario}',
    '${id_tipo_documento}',
    '${nombre_usuario}',
    '${id_ciudad}',
    '${direccion}',
    '${rol}',
    '${passHash}',
    '${correo_usuario}',
    '${telefono_usuario}'
    )`;

  connection.query(
    sqlCall,
    [
      id_usuario,
      id_tipo_documento,
      nombre_usuario,
      id_ciudad,
      direccion,
      rol,
      contraseña_usuario,
      correo_usuario,
      telefono_usuario
    ],
    (error, rows) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.status(201).json("USER_CREATED_SUCCESFULLY");
      }
    }
  );
};

exports.putUpdateUser = async (req, res) => {
  const {
    id_tipo_documento,
    nombre_usuario,
    id_ciudad,
    direccion,
    rol,
    estado,
    contraseña_usuario,
    correo_usuario,
    telefono_usuario,
    id_usuario,
  } = req.body;

  const passHash = await bcrypt.hash(contraseña_usuario, 10);
  const sqlCall = `CALL updateUser(?,?,?,?,?,?,'${passHash}','${correo_usuario}','${telefono_usuario}','${id_usuario}')`;
  connection.query(
    sqlCall,
    [
      id_tipo_documento,
      nombre_usuario,
      id_ciudad,
      direccion,
      rol,
      estado.type == "BIT",
      contraseña_usuario,
      correo_usuario,
      telefono_usuario,
      id_usuario,
    ],
    (error, rows) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.status(201).json("USER_UPDATE_SUCCESFULLY");
      }
    }
  );
};
