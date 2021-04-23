//Inicializa el server de socket.io, genera una instacia y la comparte
const socketIO = require("socket.io");
const socket = {}; //Creamos socket como objeto, porque estos se usan como referencia

function connect(server) {
  //función de conexion
  socket.io = socketIO(server);
}

module.exports = {
  connect,
  socket,
};
