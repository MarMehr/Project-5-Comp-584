// Import our custom module (mymodule.js)
const myModule = require("./mymodule");

// Read command-line arguments
const dir = process.argv[2];  // directory path
const ext = process.argv[3];  // file extension without dot

// Call the module function
// It expects a callback: function(err, data)
myModule(dir, ext, (err, list) => {

  // If the module reported an error, print it
  if (err) {
    return console.error(err);
  }

  // Otherwise, loop through the returned list and print each file
  list.forEach((file) => {
    console.log(file);
  });
});
