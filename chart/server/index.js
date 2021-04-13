import mysql from "mysql";
import fastcsv from "fast-csv";
import fs from "fs";

let stream = fs.createReadStream("test.csv");
let csvData = [];
let csvStream = fastcsv
  .parse();
//   .on("data", function(data) {
//     csvData.push(data);
//   })
//   .on("end", function() {
//     // remove the first line: header
//     csvData.shift();

//     // connect to the MySQL database
//     // save csvData
//   });
  stream.pipe(csvStream);