const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  controller
    .getMessages(req.query.user || null)
    .then((messageList) => response.success(req, res, messageList, 200))
    .catch((error) => response.error(req, res, "Unexpected error", 500, error));
});

// router.get("/:id", (req, res) => {
//   controller
//     .getMessage(req.params.id)
//     .then((data) => response.success(req, res, data, 200))
//     .catch((error) => response.error(req, res, "Error interno", 500, error));
// });

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => response.success(req, res, fullMessage, 201))
    .catch((error) =>
      response.error(
        req,
        res,
        "Información invalida",
        400,
        "Error en el controlador"
      )
    );
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Internal error", 500, error));
});

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() =>
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
    )
    .catch((error) => response.error(req, res, "Internal error", 500, error));
});

module.exports = router;
