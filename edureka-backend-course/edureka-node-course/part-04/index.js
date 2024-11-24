// url object

const url = require("url");

const urlString =
  "https://www.google.co.in/search?q=youtube&sca_esv=7479081811d2e948&sxsrf=ACQVn0-m0EZffqC9h34Il7OKx8990JRxLg%3A1710261331132&source=hp&ei=U4TwZf_HBeHl2roPwvmx2AM&iflsig=ANes7DEAAAAAZfCSY5qNZA4SxIYpObw2r-pc8fNEs7kp&ved=0ahUKEwi_vfP4k--EAxXhslYBHcJ8DDsQ4dUDCBU&uact=5&oq=youtube&gs_lp=Egdnd3Mtd2l6Igd5b3V0dWJlMhEQLhiDARjHARixAxjRAxiABDIEEAAYAzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgoQABiABBgCGMsBMggQABiABBixAzIIEAAYgAQYsQNImRBQxAdYnw9wAXgAkAEAmAGXA6AB3AyqAQkwLjEuMy4xLjG4AQPIAQD4AQGYAgegAtoNqAIKwgIHECMY6gIYJ8ICDxAjGIAEGIoFGCcYRhj5AcICDhAuGIAEGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBixAxiDAZgDFJIHCTEuMC40LjEuMaAH4zQ&sclient=gws-wiz";

//  parsing the url
const parsedUrl = url.parse(urlString, true);

console.log("protocol=>", parsedUrl.protocol);
console.log("host=>", parsedUrl.host);
console.log("path=>", parsedUrl.path);
console.log("pathname=>", parsedUrl.pathname);
console.log("port=>", parsedUrl.port);
console.log("query=>", parsedUrl.query);
console.log("search=>", parsedUrl.search);

// verbs in http
// get, post, put, delete, patch

// headers
// request headers
// response headers
// representation headers

// res.writeHead() method

// status codes
// information status code (1xx)
// successful status code (2xx)
// redirects status code (3xx)
// Client error status code (4xx)
// Server error status code (5xx)
