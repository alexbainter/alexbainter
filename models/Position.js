const mongoose = require('mongoose');
const Skill = require('./Skill');

const PositionSchema = new mongoose.Schema({
  name: String,
  company: String,
  linkURL: String,
  description: String,
  startDate: Date,
  endDate: Date,
  skills: [{
    type: mongoose.Schema.Types.ObjectId, ref: Skill.modelName
  }]
});

module.exports = mongoose.model('Position', PositionSchema);
