const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to the Database Sucessfully");
    })
    .catch((err) => {
      console.log("Error conneccting to database", err);
    });
}

module.exports = connectDB;
