const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messsage controller]: No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(), //date puede ser un dato que no queremos darle al usuario, pero que nosotros queramos saber
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
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
