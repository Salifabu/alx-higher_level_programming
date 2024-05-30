#!/usr/bin/node
const request = require('request');
const url = 'https://swapi.dev/api/films/' + episode + '/';

request('http://swapi.co/api/films/' + episode, (e, r, body) => {
  console.log(JSON.parse(body).title);
});
