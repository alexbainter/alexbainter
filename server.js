const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');
const api = require('./api');
const dbConfig = require('./config/db');
const { defaultHTML, clientDir } = require('./config/client');
const { port, isProduction } = require('./config/server');
const app = express();

mongoose.connect(dbConfig.path);
mongoose.Promise = global.Promise;

app.use(express.static(path.resolve(__dirname, clientDir)));

app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, defaultHTML));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});
