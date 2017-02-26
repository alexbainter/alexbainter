const Skill = require('../models/Skill');
const Project = require('../models/Project');

const data = [
    {
        name: 'alexbainter.com',
        linkURL: 'http://alexbainter.com',
        codeURL: 'https://github.com/metalex9/alexbainter',
        description: 'You\'re looking at it! After learning about React and Redux I was eager to build something. This is the first site I developed using the MERN stack. I wanted the site\'s design to be clean and minimal, but with something interesting to watch on the home page. I plan to actively update the site over time as I improve my skills.',
        startDate: new Date(2017, 1, 1),
        skills: [
            'JavaScript',
            'React',
            'Redux',
            'CSS',
            'Sass',
            'Design',
            'Mongo',
            'Node',
            'Webpack',
            'HTML5'
        ]
    }
];

module.exports = Array.prototype.map.bind(data, projectData => {
    return Skill.find({ 'name': { $in: projectData.skills } }).then(skills => {
        projectData.skills = skills;
        return new Project(projectData).save(err => {
            if (err) {
                console.log(`"${projectData.name}" Project Error: ${err}`);
            }
        });
    });
});
