const mongoose = require('mongoose');
const ratingModelName = require('./Rating');
const name = 'Skill';

const SkillSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: mongoose.Schema.Types.ObjectId, ref: ratingModelName
    }
});

mongoose.model(name, SkillSchema);

module.exports = name ;
