const mongoose = require('mongoose');
const skillModelName = require('./Skill');
const name = 'Project';

const ProjectSchema = new mongoose.Schema({
    name: String,
    linkURL: String,
    description: String,
    skills: [{
        type: mongoose.Schema.Types.ObjectId, ref: skillModelName
    }]
});

mongoose.model(name, ProjectSchema);

module.exports = name;
