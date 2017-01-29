const mongoose = require('mongoose');
const skillModelName = require('./Skill');
const name = 'Position';

const PositionSchema = new mongoose.Schema({
    name: String,
    company: String,
    linkURL: String,
    description: String,
    startDate: Date,
    endDate: Date,
    skills: [{
        type: mongoose.Schema.Types.ObjectId, ref: skillModelName
    }]
});

mongoose.model(name, PositionSchema);

module.exports = name;
