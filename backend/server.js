const express = require("express");
const app = express(); //Colocamos esta app al inicio
const server = require("http").Server(app); //Indicamos que nuestro server de http será nuestro server de express
const db = require("./db");
const router = require("./network/routes");
const socket = require("./socket");

const port = process.env.PORT || 3000;

db(
  "mongodb+srv://db_user_jonathangg03:pc1xyyAsUU6e2pGs@cluster0.9mha0.mongodb.net/platzi_messages?retryWrites=true&w=majority"
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/app", express.static(__dirname + "/public"));
socket.connect(server);

// app.use(router);
router(app);

server.listen(port, () => {
  //El servidor será el que escuchará, no la app de express
  console.log(`La app está escuchando en http:localhost:${port}`);
});
