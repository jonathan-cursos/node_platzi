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

function getMessage() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

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

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
};
