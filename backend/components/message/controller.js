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
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
};
