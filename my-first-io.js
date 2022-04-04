// var fs = require('fs');

// var filename = process.argv[2];
// var bufFile = fs.readFileSync(filename);
// var strFile = bufFile.toString();
// var cnt = strFile.split('\n');

// console.log(cnt.length - 1);

var fs = require("fs");

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split("\n").length - 1;

console.log(lines);
