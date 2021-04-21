const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages(filterUser) {
  //Cambiandola para popular datos
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populatedData) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populatedData);
      });
    // .catch((e) => reject(e)); No se hace el catch aquí, porque ya se hace internamente en el populated
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

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
