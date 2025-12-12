// Load the built-in 'http' module to create an HTTP server
const http = require("http");

// The first command-line argument is the port number
const port = Number(process.argv[2]);

// Create an HTTP server
const server = http.createServer((req, res) => {
  
  // The assignment requires that we only respond to POST requests
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    return res.end("Only POST method is accepted");
  }

  // Make sure the incoming data is treated as text, not a Buffer
  req.setEncoding("utf8");

  // This variable will collect the incoming POST body
  let body = "";

  // 'data' event fires when a chunk of data is received
  req.on("data", (chunk) => {
    body += chunk;  // Add the chunk to the body string
  });

  // 'end' event fires when the entire POST body has been received
  req.on("end", () => {
    // Convert the entire body to uppercase
    const uppercased = body.toUpperCase();

    // Respond to the client with the modified text
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(uppercased);
  });

  // Handle possible errors
  req.on("error", (err) => {
    res.statusCode = 500;
    res.end("Request error: " + err.message);
  });
});

// Start the server on the given port
server.listen(port);
