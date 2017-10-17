const mongoose = require('mongoose');
const Rating = require('./Rating');

const SkillSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: mongoose.Schema.Types.ObjectId, ref: Rating.modelName
  }
});

module.exports = mongoose.model('Skill', SkillSchema);
