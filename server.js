const express = require('express');
const app = express();
const models = require('./models');
const dbConfig = require('./config/db');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.path);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
