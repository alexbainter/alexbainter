const express = require('express');
const app = express();
const modelNames = require('./models');

console.log(modelNames.skill);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
