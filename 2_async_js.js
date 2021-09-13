// async javascript
// allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one.

console.log("Gagan is a Good Boy");

setTimeout(() => {
  console.log("Checking js");
}, 1000);

console.log("Gagan is a Bad boy");
