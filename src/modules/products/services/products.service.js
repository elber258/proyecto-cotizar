const connection = require("../../../../config.db");


exports.getAllProducts = (req, res) => {
  const sqlCall = "CALL getProductsDB()";
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      throw error;
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  const sqlCall = `CALL getProduct('${id}')`;
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const sqlCall = `CALL deleteProduct('${id}')`;
  connection.query(sqlCall, (error, rows) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      if (rows.affectedRows != 0) {
        res.status(201).json("PRODUCT_DELETED_SUCCESFULLY");
      } else {
        res.json("NO_PRODUCT_TO_DELETE");
      }
    }
  });
};

exports.postCreateProduct = (req, res) => {
  const {
    nombre_producto,
    id_categoria,
    descripcion,
    precio,
    stock,
    stock_minimo,
  } = req.body;

  const sqlCall = `
  CALL createProduct(
    '${nombre_producto}',
    '${id_categoria}',
    '${descripcion}',
    '${precio}',
    '${stock}',
    '${stock_minimo}'
    )`;

  connection.query(
    sqlCall,
    [nombre_producto, id_categoria, descripcion, precio, stock, stock_minimo],
    (error, rows) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.status(201).json("PRODUCT_CREATED_SUCCESFULLY");
      }
    }
  );
};

exports.putUpdateProduct = (req, res) => {
  const {
    nombre_producto,
    id_categoria,
    descripcion,
    precio,
    stock,
    stock_minimo,
    id_producto,
  } = req.body;

  const sqlCall = `
  CALL updateProduct(
    '${nombre_producto}',
    '${id_categoria}',
    '${descripcion}',
    '${precio}',
    '${stock}',
    '${stock_minimo}',
    '${id_producto}'
    )`;
  connection.query(
    sqlCall,
    [
      nombre_producto,
      id_categoria,
      descripcion,
      precio,
      stock,
      stock_minimo,
      id_producto,
    ],
    (error, rows) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.status(201).json("PRODUCT_UPDATE_SUCCESFULLY");
      }
    }
  );
};
