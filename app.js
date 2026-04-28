const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/suma',(req, res) => {
    const {a,b} = req.query;
    const resultado = Number(a) + Number(b);
    res.send(`El resultado de la suma es: ${resultado}`);
});

module.exports = app;
