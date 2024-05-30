#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const outputFile = process.argv[3];

function saveFile (content, outputFile) {
  fs.writeFile(outputFile, content, 'utf8', (err) => {
    if (err) throw err;
  });
}

request
  .get(url, 'utf8', (e, r, body) => {
    saveFile(body, outputFile);
  });
