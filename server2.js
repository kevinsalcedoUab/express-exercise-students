const express = require("express");

const app = express();

app.get('/mensaje', (req, res) => {
    res.status(200).send(`
    <h1>El servidor funciona correctamente</h1>
    <p>Aquí iría el contenido del mensaje</p>
    `);
});
app.get('/', (req, res) => {
    res.status(200).send('holi');
});

app.use('/', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(3000);

