const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    name: String,
    description: String,
    displayOrder: Number
});

const Rating = mongoose.model('Rating', RatingSchema);
