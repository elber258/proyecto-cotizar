const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const users = require("../services/users.service");

dotenv.config();

router.get("/", users.getAllUsers);

router.get("/:id", users.getUser);

router.post("/create", users.postCreateUser);

router.put("/update", users.putUpdateUser);

router.delete("/delete/:id", users.deleteUser);

module.exports = router;
