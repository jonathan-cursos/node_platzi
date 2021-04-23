const socket = require("../../socket").socket;
const store = require("./store");

function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error("[messsage controller]: No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }

    let fileUrl = "";
    if (file) {
      fileUrl = "http://localhost:3000/app/files/" + file.filename;
    }
    const fullMessage = {
      user: user,
      message: message,
      chat: chat,
      date: new Date(),
      image: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit("message", fullMessage); //Emitir los mensajes
    resolve(fullMessage);
  });
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
}

// function getMessage(id) {
//   return new Promise((resolve, reject) => {
//     resolve(store.get(id));
//   });
// }

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("No se ingresó un ID");
      return false;
    }
    const result = await store.update(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("No se ingresó un ID");
      return false;
    }
    store
      .delete(id)
      .then(() => resolve("Se elimino correctamente"))
      .catch((error) => reject(error));
  });
}

module.exports = {
  addMessage,
  getMessages,
  // getMessage,
  updateMessage,
  deleteMessage,
};
