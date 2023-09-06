const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const products = require("../services/products.service");

dotenv.config();

router.get("/", products.getAllProducts);

router.get("/:id", products.getProduct);

router.post("/create", products.postCreateProduct);

router.put("/update", products.putUpdateProduct);

router.delete("/delete/:id", products.deleteProduct);

module.exports = router;