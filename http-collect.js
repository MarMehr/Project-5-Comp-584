// Load the built-in 'http' module for making GET requests
const http = require("http");

// The URL is the first command-line argument
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, (response) => {
  // Ensure we receive text instead of raw Buffer data
  response.setEncoding("utf8");

  // This variable will store the entire response data
  let fullData = "";

  // 'data' event fires every time a chunk of data arrives
  response.on("data", (chunk) => {
    fullData += chunk;  // Add each chunk to our string
  });

  // 'end' event fires when all data has been received
  response.on("end", () => {
    // Print the length of the collected data
    console.log(fullData.length);

    // Print the complete data itself
    console.log(fullData);
  });

  // If there's a problem with the response, handle it
  response.on("error", (err) => {
    console.error("Response error:", err.message);
  });

// If the request itself fails, handle the error
}).on("error", (err) => {
  console.error("Request error:", err.message);
});
