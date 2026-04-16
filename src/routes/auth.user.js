const express = require("express");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User Registered Sucessfully",
    user,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username,
  });
  if (!user) {
    return res.json({
      message: "User not found",
    });
  }
  const isPasswordValid = password === user.password;
  if (!isPasswordValid) {
    return res.json({
      message: "Invalid Password",
    });
  }
  res.json({
    message: "Login successful",
  });
});

module.exports = router;
