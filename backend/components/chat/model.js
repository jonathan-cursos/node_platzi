const mongoose = require("mongoose");

const Schema = mongoose.Schema; //sacamos mongoose.Schema porque lo usaremos mucho

const mySchema = new Schema({
  users: [
    {
      type: Schema.objectId,
      ref: "user",
    },
  ],
});

const model = mongoose.model("Chat", mySchema);
//2 params: El nombre de la colección (equivalente a las tablas) y el esquema

module.exports = model;
