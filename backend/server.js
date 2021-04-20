const express = require("express");
// const router = require("./components/message/network");
const db = require("./db");
const router = require("./network/routes");

const app = express();
const port = process.env.PORT || 3000;

db(
  "mongodb+srv://db_user_jonathangg03:pc1xyyAsUU6e2pGs@cluster0.9mha0.mongodb.net/platzi_messages?retryWrites=true&w=majority"
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/app", express.static(__dirname + "/public"));

// app.use(router);
router(app);

app.listen(port, () => {
  console.log(`La app está escuchando en http:localhost:${port}`);
});
