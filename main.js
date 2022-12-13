const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) =>
  err ? console.log(err) : console.log("File is created successfully")
);
