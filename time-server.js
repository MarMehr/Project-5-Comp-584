// Load the built-in 'net' module which allows us to create TCP servers
const net = require("net");

// The port number is provided as the first command-line argument
const port = Number(process.argv[2]);

// Helper function to add a leading zero to single-digit numbers
// Example: 3 -> "03"
function zeroFill(num) {
  return num < 10 ? "0" + num : String(num);
}

// Create a TCP server
// The callback runs every time a client connects
const server = net.createServer((socket) => {
  
  // Get the current date and time
  const now = new Date();

  // Format the date and time EXACTLY as required:
  // YYYY-MM-DD hh:mm
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1);  // Month is 0-based
  const day = zeroFill(now.getDate());
  const hour = zeroFill(now.getHours());
  const minute = zeroFill(now.getMinutes());

  const formatted = `${year}-${month}-${day} ${hour}:${minute}\n`;

  // Send the formatted date/time to the client
  socket.end(formatted);
});

// Start the server listening on the given port
server.listen(port);
