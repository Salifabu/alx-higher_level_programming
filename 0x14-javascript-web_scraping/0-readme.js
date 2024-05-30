#!/usr/bin/node
const fs = require('fs');
const inputFile = process.argv[2];

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
