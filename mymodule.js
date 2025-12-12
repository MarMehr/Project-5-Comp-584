// Load required modules
const fs = require("fs");
const path = require("path");

// Export a function and make it available to other files using module.exports.
// This function must take three arguments:
//   1. directory path
//   2. file extension to filter by
//   3. callback function (error, data)
module.exports = function (dir, ext, callback) {

  // Add the dot because path.extname() returns ".txt", ".js", etc.
  const targetExt = "." + ext;

  // Read the directory contents asynchronously
  fs.readdir(dir, (err, files) => {

    // If an error occurs, pass the error to the callback and exit
    if (err) {
      return callback(err);
    }

    // Filter the list to include only files with the matching extension
    const filtered = files.filter((file) => {
      return path.extname(file) === targetExt;
    });

    // Pass 'null' for error and the filtered result back to the caller
    callback(null, filtered);
  });
};
