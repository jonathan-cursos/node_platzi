const express = require("express");
require("dotenv").config();

let app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    customHeader: "Valor personalizado",
  });
  res.send("Lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("Mensaje" + req.body.text + "añadido");
});

app.listen(port);
console.log(`La app está escuchando en http:localhost:${port}`);
