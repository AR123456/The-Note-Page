const http = require("http");
const fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
    case "/food":
    case "/movies":
    case "/frameworks":
      return renderHTML(path + ".html", res);
    default:
      return renderHTML(path + "/index.html", res);
  }
}
function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
