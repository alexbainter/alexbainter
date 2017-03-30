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
    },
    {
        name: 'Really Big Dictionary',
        linkURL: 'http://reallybigdictionary.com',
        codeURL: 'https://github.com/metalex9/big-dictionary',
        description: 'This is a tiny website that displays definitions for English words from a third-party API. Click the link and you\'ll find out why I called it "really big." I had a fun time designing this even though there isn\'t much to it. The neat part about this site is every word in the definition is actually a link to the definition of itself. If this were a serious project I would have made some indication of this feature; instead, it\'s left for the user to discover. I look forward to continuing to make small sites like this where I can play with the design.',
        startDate: new Date(2017, 2, 1),
        skills: [
            'JavaScript',
            'CSS',
            'Sass',
            'Design',
            'Node',
            'Webpack',
            'HTML5',
            'Pug',
            'jQuery'
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
