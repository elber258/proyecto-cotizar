const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./src/indexRouter");

const port = 3300;

app.use(cors());

app.use(express.json());

routers(app);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor ejecutandose en el puerto " + port);
  }
});
