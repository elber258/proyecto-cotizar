const express = require("express");
const users = require("../src/modules/users/routes/users.router");
const products = require("../src/modules/products/routes/products.router");

const usersAuth = require("../src/modules/users/routes/users.auth.router");
const passport = require("passport");
require("./utils/auth/index");

const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));

  app.use("/api", baseRoute);

  baseRoute.use("/userAuth", usersAuth);

  baseRoute.use(
    "/users",
    passport.authenticate("jwt", { session: false }),
    users
  );

  baseRoute.use(
    "/products",
    //passport.authenticate("jwt", { session: false }),
    products
  );
};

module.exports = routers;
