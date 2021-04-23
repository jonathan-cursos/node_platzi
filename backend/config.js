const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://db_user_jonathangg03:pc1xyyAsUU6e2pGs@cluster0.9mha0.mongodb.net/platzi_messages?retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  fileRoute: process.env.FILE_ROUTE || "/files",
};

module.exports = config;
