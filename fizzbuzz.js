const express = require('express');
const app = express();
const port = 8080;

function fizzBuzzOutput(value){
    // TODO: Write fizzbuzz
    return value;
}

app.get('/fizzbuzz/:n', (req, res) => {
    // TODO: Extract n from the parameters and send
    // the fizzbuzz output to the client.

    res.send("");
})

module.exports.app = app;
module.exports.port = port;
module.exports.fizzBuzzOutput = fizzBuzzOutput;
