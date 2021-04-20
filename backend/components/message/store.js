const mongoose = require("mongoose");
const Model = require("./model");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://db_user_jonathangg03:pc1xyyAsUU6e2pGs@cluster0.9mha0.mongodb.net/platzi_messages?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("[db]: Conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

// async function getMessage(id) {
//   const foundMessage = await Model.findOne({
//     _id: id,
//   });
//   return foundMessage;
// }

function deleteMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateText,
  delete: deleteMessage,
  // get: getMessage,
};
