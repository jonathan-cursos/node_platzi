const Model = require("./model");

const createChat = (user) => {
  const chat = new Model(user);
  return chat.save();
};

const getChat = (userId) => {
  return new Promise((resolve, reject) => {
    const filter = {
      users: userId,
    };
    Model.find(filter)
      .populate("users")
      .exec((error, populatedData) => {
        if (error) {
          reject(error.message);
          return false;
        }
        resolve(populatedData);
      });
  });
};

module.exports = {
  create: createChat,
  get: getChat,
};
