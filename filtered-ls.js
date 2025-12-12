// Load the built-in 'fs' module to read directory contents
const fs = require("fs");

// Load the 'path' module to help work with file paths and extensions
const path = require("path");

// The first command-line argument is the directory to look in
// Example: node filtered-ls.js ./folder txt
const folder = process.argv[2];

// The second argument is the extension to filter by (e.g., "txt")
// We add the dot because path.extname() returns ".txt", not "txt"
const extension = "." + process.argv[3];

// Read the directory asynchronously
// 'files' will be an array of filenames inside the folder
fs.readdir(folder, (err, files) => {
  
  // If an error occurs (e.g., folder not found), print the error
  if (err) {
    return console.error(err);
  }

  // Loop through each file in the directory
  files.forEach((file) => {
    
    // Check if the file's extension matches the extension we want
    // path.extname("example.txt") → ".txt"
    if (path.extname(file) === extension) {
      
      // Print only the files with the correct extension
      console.log(file);
    }
  });
});
