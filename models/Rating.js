const mongoose = require('mongoose');
const name = 'Rating';

const RatingSchema = mongoose.Schema({
    name: String,
    description: String,
    displayOrder: Number
});

mongoose.model(name, RatingSchema);

module.exports = name;
