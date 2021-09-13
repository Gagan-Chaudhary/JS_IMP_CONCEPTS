let fs = require("fs");
// File System module in Nodejs to read files

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err, data);
});
