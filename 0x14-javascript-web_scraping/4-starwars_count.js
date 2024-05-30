#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
let count = 0;

function countAppearances (movieList) {
  for (let i = 0; i < movieList.length; i++) {
    for (let j = 0; j < movieList[i].characters.length; j++) {
      if (movieList[i].characters[j].includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
}

request(url, (e, r, body) => {
  countAppearances(JSON.parse(body).results);
});
