const store = require("./store");

const createChat = (user) => {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject("No se ingreso usuario al chat");
      return false;
    }
    const userData = {
      users: user,
    };
    const data = store.create(userData);
    resolve(data);
  });
};

const getChat = (userId) => {
  if (!userId) {
    Promise.reject("No se ingreso un chat");
  }
  return store.get(userId);
};

module.exports = {
  createChat,
  getChat,
};
