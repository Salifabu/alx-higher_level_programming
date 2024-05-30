#!/usr/bin/node
const request = require('request');
const episode = process.argv[2];

request('http://swapi.co/api/films/' + episode, (e, r, body) => {
  console.log(JSON.parse(body).title);
});
