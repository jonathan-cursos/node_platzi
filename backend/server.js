const express = require("express");
const response = require("./network/response");

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/app", express.static(__dirname + "/public"));
app.use(router);

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    customHeader: "Valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  if (req.query.error === "ok") {
    response.error(
      req,
      res,
      "Error interno",
      400,
      "El error que estamos corriendo es simulado"
    );
  }
  // response.success(req, res, "Creado correctamente", 201); Sí corremos esta linea, y simulamos el error, nos dará error, por correr las headers del success cuando la respuesta ya fue erronea
});

app.listen(port, () => {
  console.log(`La app está escuchando en http:localhost:${port}`);
});
