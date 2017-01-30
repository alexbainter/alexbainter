const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const models = require('./models');
const dbConfig = require('./config/db');
const { defaultHTML, clientDir } = require('./config/client');
const app = express();

mongoose.connect(dbConfig.path);

app.use(express.static(path.resolve(__dirname, clientDir)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, defaultHTML));
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
