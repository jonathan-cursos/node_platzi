const mongoose = require("mongoose");

const Schema = mongoose.Schema; //sacamos mongoose.Schema porque lo usaremos mucho

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  message: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  date: Date,
  image: String,
});

const model = mongoose.model("Messages", mySchema);
//2 params: El nombre de la colección (equivalente a las tablas) y el esquema

module.exports = model;
