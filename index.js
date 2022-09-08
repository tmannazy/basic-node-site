// const eventEmitter = require("events")
// const

const { log } = require("console");
const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8080;

const requestListener = (req, res) => {
  fs.readFile(__dirname)
    .then((file) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      let filePath;
      switch (req.url) {
        case "/index.html":
          filePath = path.join(file, "/index.html");
          break;
        case "/about.html":
          filePath = path.join(file, "/about.html");
          break;
        case "/contact-me.html":
          filePath = path.join(file, "/contact-me.html");
          break;
        case "/404.html":
          filePath = path.join(file, "/404.html");
          break;
      }
      res.end(filePath);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.end(err.message);
      console.log("Error: " + err.message);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host);
