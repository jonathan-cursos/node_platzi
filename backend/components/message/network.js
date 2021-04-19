//Encargado de recibir la petición, procesar la info. y envarla al controlador
const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  res.header({
    customHeader: "Valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/", (req, res) => {
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
  response.success(req, res, "Creado correctamente", 201);
});

module.exports = router;
