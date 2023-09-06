const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const users = require("../services/users.service");

dotenv.config();

router.post("/auth", users.postUserAuth);
router.post("/register", users.postCreateUser);


module.exports = router;
