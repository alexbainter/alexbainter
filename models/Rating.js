const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
  name: String,
  description: String,
  displayOrder: Number,
});

module.exports = mongoose.model('Rating', RatingSchema);
