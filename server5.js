const express = require("express");
const path = require("path");

const isPalindrome = require("is-palindrome");

const app = express();

app.get('/check/', (req, res) => {
    var word = req.query.palabra;
    var response = "Es un palíndromo"

    if(!isPalindrome(word)){
        response = "No es un palíndromo"
    }
    res.status(200).send(response);
});

app.use('/', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(3000);

