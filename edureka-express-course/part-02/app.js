const express = require("express");
const router = express.Router();

// after using this server goes to reloading
router.use((req, res, next) => {
  console.log("time", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("welcome to home page");
});

router.get("/edureka", (req, res) => {
  res.send("welcome to edureka page");
});

module.exports = router;
