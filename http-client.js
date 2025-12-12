// Load the built-in 'http' module so we can make HTTP requests
const http = require("http");

// The first command-line argument is the URL to request
// Example: node http-client.js http://example.com
const url = process.argv[2];

// Make an HTTP GET request to the given URL
http.get(url, (response) => {
  // Ensure that the data we receive is a string (utf8) instead of a Buffer
  response.setEncoding("utf8");

  // 'data' event fires every time a chunk of data is received
  response.on("data", (chunk) => {
    // Print each chunk of data to the console
    console.log(chunk);
  });

  // Handle any errors that happen with the response stream
  response.on("error", (err) => {
    console.error("Response error:", err.message);
  });

// Handle errors that occur when trying to make the request
}).on("error", (err) => {
  console.error("Request error:", err.message);
});
