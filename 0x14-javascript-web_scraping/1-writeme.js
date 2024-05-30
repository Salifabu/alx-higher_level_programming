#!/usr/bin/node
const fs = require('fs');
const outputFile = process.argv[2];
const outputString = process.argv[3];

fs.writeFile(outputFile, outputString, 'utf8', err => {
  if (err) {
    console.log(err);
  }
});
