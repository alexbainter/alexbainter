const mongoose = require('mongoose');
const Skill = require('./Skill');

const ProjectSchema = new mongoose.Schema({
  name: String,
  linkURL: String,
  codeURL: String,
  description: String,
  startDate: Date,
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Skill.modelName,
    },
  ],
});

module.exports = mongoose.model('Project', ProjectSchema);
