// use nodemon => it is replacement of node

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>working</h1>");
});

server.listen(3000, () => {
  console.log("server running");
});
