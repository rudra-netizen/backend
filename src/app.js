const express = require("express");
const Authrouter = require("./routes/auth.user");

const app = express();
app.use(express.json());
app.use("/auth", Authrouter);
module.exports = app;
