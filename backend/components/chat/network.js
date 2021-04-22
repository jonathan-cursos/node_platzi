const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");

const router = express.Router();

router.get("/:userId", (req, res) => {
  controller
    .getChat(req.params.userId)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Internal error", 500, error));
});

router.post("/", (req, res) => {
  controller
    .createChat(req.body.users)
    .then((data) => response.success(req, res, data, 201))
    .catch((error) =>
      response.error(req, res, "Internal error", 500, error.message)
    );
});

module.exports = router;
