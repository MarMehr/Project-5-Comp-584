// Load the modules needed:
// 'http' to create an HTTP server
// 'fs' to read files
const http = require("http");
const fs = require("fs");

// The first command-line argument is the port number
const port = Number(process.argv[2]);

// The second argument is the path to the file we will serve
const filePath = process.argv[3];

// Create an HTTP server
const server = http.createServer((req, res) => {
  
  // Write response headers
  // The instructions say to always serve plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Create a readable file stream
  const fileStream = fs.createReadStream(filePath);

  // Send (pipe) the file directly to the HTTP response
  fileStream.pipe(res);

  // Handle file read errors
  fileStream.on("error", (err) => {
    res.statusCode = 500;
    res.end("File read error: " + err.message);
  });
});

// Start the server on the specified port
server.listen(port);
