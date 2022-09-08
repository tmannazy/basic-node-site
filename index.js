const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8080;

const requestListener = (req, res) => {
  function serve(pathToFile) {
    fs.readFile(pathToFile)
      .then((file) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(file);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
        return;
      });
  }

  let filePath;
  switch (req.url) {
    case "/":
      // filePath = path.join(__dirname, "/index.html");
      filePath = __dirname + "/index.html";
      serve(filePath);
      break;
    case "/about":
      filePath = __dirname + "/about.html";
      serve(filePath);
      break;
    case "/contact":
      filePath = __dirname + "/contact-me.html";
      serve(filePath);
      break;
    case "/404":
      filePath = __dirname + "/404.html";
      serve(filePath);
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host);
