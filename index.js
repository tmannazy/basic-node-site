// const eventEmitter = require("events")
// const

const { log } = require("console");
const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8080;

const requestListener = (req, res) => {
  fs.readFile(__dirname + "/about.html")
    .then((file) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(file);
      console.log("File loaded!");
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
