// Load the 'fs' module to read files
const fs = require("fs");

// Read the file synchronously (blocking)
// process.argv[2] contains the filepath passed from the command line
const contents = fs.readFileSync(process.argv[2], "utf8");

// Count newline characters by splitting on '\n'
const lines = contents.split("\n").length - 1;

// Output the number of lines
console.log(lines);
