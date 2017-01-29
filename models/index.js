const ratingModelName = require('./Rating');
const skillModelName = require('./Skill');
const projectModelName = require('./Project');
const positionModelName = require('./Position');

module.exports = {
    rating: ratingModelName,
    skill: skillModelName,
    project: projectModelName,
    position: positionModelName
}
