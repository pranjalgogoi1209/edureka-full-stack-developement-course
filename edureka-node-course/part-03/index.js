// os module
var os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log("total memory", os.totalmem());

// fs module
const fs = require("fs");
fs.writeFileSync(
  "app.txt",
  "this is app.txt file which is created by fs module"
);

// http module
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Context-Type": "text/plain",
  });
  res.write("<h1>Hello World</h1>");
  res.end("<h1>Hello World</h1>");
});
const port = 3510;
server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

// routing
const server2 = http.createServer((req, res) => {
  res.write("<h1>COMMON LAYOUT</h1>");
  if (req.url === "/" || req.url === "/home") {
    res.end("HOME PAGE");
  } else if (req.url === "/about") {
    res.end("ABOUT PAGE");
  } else {
    res.end("PAGE NOT FOUND");
  }
  console.log(req.url);
});

server2.listen(7000, () => {
  console.log("server2 is running");
});
