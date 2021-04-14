const express = require("express");
const path = require("path");

const palindrome = require("./utils/palindrome/index");
const app = express();

app.get('/check/:word', (req, res) => {
    var word = req.params.word;
    var response = "Es un palíndromo"

    if(!palindrome.palindrome(word)){
        response = "No es un palíndromo"
    }
    res.status(200).send(response);
});

app.use('/', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(3000);

