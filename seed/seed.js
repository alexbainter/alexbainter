const mongoose = require('mongoose');
const dbConfig = require('../config/db');
const saveRatings = require('./ratings');
const saveSkills = require('./skills');
const saveSnippets = require('./snippets');
const savePositions = require('./positions');
const saveProjects = require('./projects');

mongoose.connect(dbConfig.path);

mongoose.Promise = Promise;

Promise.all(saveRatings())
.then(() => {
    return Promise.all(saveSkills());
})
.then(() => {
    return Promise.all(savePositions());
})
.then(() => {
    return Promise.all(saveProjects());
})
.then(() => {
    return Promise.all(saveSnippets());
})
.then(() => {
    console.log('Seed Complete.');
    process.exit();
});
