const mongoose = require('mongoose');
const dbConfig = require('../config/db');
const saveRatings = require('./ratings');
const saveSkills = require('./skills');

mongoose.connect(dbConfig.path);

mongoose.Promise = global.Promise;

Promise.all(saveRatings())
.then(() => {
    return Promise.all(saveSkills())
})
.then(() => {
    process.exit();
});
