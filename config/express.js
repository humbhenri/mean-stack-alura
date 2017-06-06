const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/v1/fotos', (req, res) => {
    res.end();
});

module.exports = app;