#!/usr/bin/node

const request = require('request');
const episode = process.argv[2];

if (!episode) {
    console.error('Error: Please provide an episode number as an argument.');
    process.exit(1);
}

const url = 'https://swapi.dev/api/films/' + episode + '/';

request(url, (e, r, body) => {
    if (e) {
        console.error('Error making request:', e);
        return;
    }

    if (r.statusCode !== 200) {
        console.error('Error: Received status code', r.statusCode);
        return;
    }

    try {
        const data = JSON.parse(body);
        console.log(data.title);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
