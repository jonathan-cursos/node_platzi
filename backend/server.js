const express = require("express");
require("dotenv").config();

let app = express(); //Iniciar express
const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
  //devuelve 'hola' en cualquier ruta
  res.send("hola");
});

app.listen(port); // Que la app permanezca escuchando
console.log(`La app está escuchando en http:localhost:${port}`);
