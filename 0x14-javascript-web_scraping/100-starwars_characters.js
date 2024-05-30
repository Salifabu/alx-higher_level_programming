#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];

const getCharNames = function (charIdList) {
  for (let i = 0; i < charIdList.length; i++) {
    request.get(charIdList[i], (e, r, body) => {
      console.log(JSON.parse(body).name);
    });
  }
};

request
  .get('http://swapi.co/api/films/' + movieId, 'utf8', (e, r, body) => {
    getCharNames(JSON.parse(body).characters);
  });
