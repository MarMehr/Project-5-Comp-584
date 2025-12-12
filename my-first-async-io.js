// Load the built-in 'fs' module, which lets us work with the file system
const fs = require("fs");

// The file path is passed as the first argument after the script name
// Example: node my-first-async-io.js file.txt
const filePath = process.argv[2];

// Read the file asynchronously.
// Arguments:
// 1. filePath      → the file to read
// 2. "utf8"        → tells Node to return a string instead of a Buffer
// 3. callback      → a function that runs AFTER the file is done being read
fs.readFile(filePath, "utf8", (err, data) => {

  // If an error happens (e.g., file not found), log it and exit the function
  if (err) {
    return console.error(err);
  }

  // Split the file contents at every newline character ('\n'),
  // then count how many splits occurred.
  // Subtracting 1 gives the number of newline characters.
  const lines = data.split("\n").length - 1;

  // Print the number of newline characters found
  console.log(lines);
});
