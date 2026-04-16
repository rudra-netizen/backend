const express = require("express");

const router = express.Router();
router.use((req, res, next) => {
  console.log("This is a middleware between router and api");
  next();
});
router.get("/", (req, res) => {
  res.json({
    message: "Hello jee",
  });
});

module.exports = router;
