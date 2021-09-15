// let fs = require("fs");
let fs = require("fs/promises");
// const { setTimeout } = require("timers/promises");
// File System module in Nodejs to read files

let a = fs.readFile("file.txt", "utf-8");
console.log(a);
a.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
// setTimeout(() => {
//   console.log(a);
// }, 4000);

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

console.log("This is eof ");

// This is eof prints first because fs.readFile takes time to read the file and async js executes rest of the code

// JavaScript Calllbacks
// JavaScript Calllbacks
// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// Async Await
// used to execute code in sequence

const readThree = async (file1, file2, file3) => {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let a3 = fs.readFile(file3, "utf-8");
  let c2 = await a2;
  console.log(c2);
  let c1 = await a1;
  console.log(c1);

  let c3 = await a3;
  console.log(c3);
};

readThree("file1.txt", "file2.txt", "file3.txt");

// It will run async in background but follow await
// Await helps to convert to a kind of sync js
