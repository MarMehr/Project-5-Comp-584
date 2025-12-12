// Load the 'http' module for making HTTP GET requests
const http = require("http");

// Store the three URLs passed from the command line
const urls = process.argv.slice(2);

// This array will hold the data for each URL in the correct order
const results = [];

// This counter tracks how many requests have finished
let completed = 0;

// Function to perform an HTTP GET request for a given index
function httpGet(index) {

  http.get(urls[index], (response) => {
    response.setEncoding("utf8");

    let data = "";

    // Collect each chunk of data into the 'data' string
    response.on("data", (chunk) => {
      data += chunk;
    });

    // When the response ends, store the result and update counter
    response.on("end", () => {
      results[index] = data;   // Store the data in the correct position
      completed++;

      // When all 3 requests have finished, print results in order
      if (completed === urls.length) {
        results.forEach((result) => console.log(result));
      }
    });

    // Handle any response errors
    response.on("error", (err) => {
      console.error("Response error:", err.message);
    });

  }).on("error", (err) => {
    console.error("Request error:", err.message);
  });
}

// Start all 3 GET requests in parallel
for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
