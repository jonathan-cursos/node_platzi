const mongoose = require("mongoose");
const Model = require("./model");

mongoose.Promise = global.Promise; //Buena practica: Para que en lugar de los callbacks de mongoose se utilicen las promesas para resolver más fácil
//Sí usamos librerias de promesas, podemos indicar que use esas en lugar de las nativas
mongoose.connect(
  "mongodb+srv://db_user_jonathangg03:pc1xyyAsUU6e2pGs@cluster0.9mha0.mongodb.net/platzi_messages?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, //buena practica para que no haya problema sí el servidor es nuevo o antiguo
    useUnifiedTopology: true, //Sino dara un warning
  }
);
console.log("[db]: Conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get: para obtener uno en specifico
  //update
  //delete
};
