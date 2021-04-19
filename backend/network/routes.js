//Para no declarar el router en cada archivo, y usar el mismo en todos, lo crearemos aquí
const message = require("../components/message/network");
const routes = function (server) {
  //Usaremos el server para añadir todas las rutas
  server.use("/message", message); //Cara vez que usemos la ruta /message, llamará al network del componente message
};

module.exports = routes;
