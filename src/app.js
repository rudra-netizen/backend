const express = require("express");
const router = require("./routes/index.routes");
const Authrouter = require("./routes/auth.user");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("This is a middleware between app and router");
  next();
});
app.use("/", router);
app.use("/auth", Authrouter);

module.exports = app;
