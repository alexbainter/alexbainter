const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const models = require('./models');
const api = require('./api');
const dbConfig = require('./config/db');
const { defaultHTML, clientDir } = require('./config/client');
const { port } = require('./config/server');
const app = express();

mongoose.connect(dbConfig.path, { keepAlive: dbConfig.keepAliveMS });
mongoose.Promise = global.Promise;

app.use(compression());

app.use(express.static(path.resolve(__dirname, clientDir)));

app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, defaultHTML));
});

app.use((req, res, next) => {
    res.status(404).send('Not found.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error, please try again later.');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});
