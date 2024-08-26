// I/O heavy operations
// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
// Examples of I/O Heavy Operations:
// Reading a file
// Starting a clock
// HTTP Requests
 
 
// Let’s try to write code to do an I/O heavy operation - 
// Open repl.it
// Create a file in there (a.txt) with some text inside
// Write the code to read a file synchronously
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

// Create another file (b.txt)
// Write the code to read the other file synchronously
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);