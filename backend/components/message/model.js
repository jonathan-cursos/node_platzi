const mongoose = require("mongoose");

const Schema = mongoose.Schema; //sacamos mongoose.Schema porque lo usaremos mucho

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("Messages", mySchema);
//2 params: El nombre de la colección (equivalente a las tablas) y el esquema

module.exports = model;
