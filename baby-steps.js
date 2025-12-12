// Initialize a total variable to store the sum
let total = 0;

// Loop through command-line arguments starting at index 2
for (let i = 2; i < process.argv.length; i++) {
  // Convert each argument from string to a number and add it to total
  total += Number(process.argv[i]);
}

// Print the final result
console.log(total);
