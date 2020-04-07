const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hellow Word');
});

app.listen(3001);