const mongoose = require('mongoose');
const dbConfig = require('../config/db');
const saveRatings = require('./ratings');
const saveSkills = require('./skills');
const saveSnippets = require('./snippets');

mongoose.connect(dbConfig.path);

mongoose.Promise = Promise;

Promise.all(saveRatings())
.then(() => {
    return Promise.all(saveSkills())
})
.then(() => {
    return Promise.all(saveSnippets())
})
.then(() => {
    process.exit();
});
