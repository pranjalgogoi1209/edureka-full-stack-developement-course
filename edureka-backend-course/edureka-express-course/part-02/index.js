const express = require("express");
const app = express();

// importing another file
const web = require("./app");

/* 
app.get("/", (req, res) => {
  console.log("welcome to express server => home page");
  res.send("<h1>HOME PAGE</h1>");
});

app.listen(3015, () => {
  console.log("server is runnning");
}); */

// .method using router not app

/* router.get("/", (req, res) => {
  console.log("welcome to express server => home page2");
  res.send("<h1>HOME PAGE2</h1>");
}); */

/* router.get("/about", (req, res) => {
  console.log("welcome to express server => about page2");
  res.send("<h1>ABOUT PAGE2</h1>");
});

router.get("/contact", (req, res) => {
  console.log("welcome to express server => contact page2");
  res.send("<h1>CONTACT PAGE2</h1>");
}); */

// router middleware
app.use("/", web);

app.listen(8000, () => {
  console.log("server2 is runnning");
});
