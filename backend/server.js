const express = require("express");
const app = express(); //Colocamos esta app al inicio
const server = require("http").Server(app); //Indicamos que nuestro server de http será nuestro server de express
const db = require("./db");
const router = require("./network/routes");
const socket = require("./socket");
const cors = require("cors");
const config = require("./config");

db(config.dbUrl);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(config.publicRoute, express.static(__dirname + "/public"));
socket.connect(server);

// app.use(router);
router(app);

server.listen(config.port, () => {
  //El servidor será el que escuchará, no la app de express
  console.log(`La app está escuchando en ${config.host}:${config.port}`);
});
