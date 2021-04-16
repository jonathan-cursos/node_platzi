const express = require("express");
require("dotenv").config();

let app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

// app.use("/", (req, res) => {
//   res.send("hola");
// });

app.use(router); //Añadir router a la app de express

router.get("/message", (req, res) => {
  res.send("Lista de mensajes");
});

router.post("/message", (req, res) => {
  res.send("Mensaje añadido");
});

app.listen(port);
console.log(`La app está escuchando en http:localhost:${port}`);
