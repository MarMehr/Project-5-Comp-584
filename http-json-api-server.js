// Load the required modules
const http = require("http");
const url = require("url");

// The server should listen on the port number from the first argument
const port = Number(process.argv[2]);

// Create the server
const server = http.createServer((req, res) => {

  // Parse the request URL
  // 'true' makes the query string parsed into an object
  const parsedUrl = url.parse(req.url, true);

  // The ISO time string will be found in parsedUrl.query.iso
  const isoString = parsedUrl.query.iso;

  // Create a Date object from the ISO string
  const time = new Date(isoString);

  let result;

  // Handle /api/parsetime endpoint
  if (parsedUrl.pathname === "/api/parsetime") {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  }

  // Handle /api/unixtime endpoint
  else if (parsedUrl.pathname === "/api/unixtime") {
    result = {
      unixtime: time.getTime()
    };
  }

  // If the endpoint is not recognized, return 404
  else {
    res.writeHead(404);
    return res.end();
  }

  // Write a JSON response header
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send the JSON response
  res.end(JSON.stringify(result));
});

// Start the server
server.listen(port);
