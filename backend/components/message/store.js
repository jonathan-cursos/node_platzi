const list = []; //aquí almacenaremos los datos simulando una DB

function addMessage(message) {
  list.push(message);
}

function getMessage() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get: para obtener uno en specifico
  //update
  //delete
};
