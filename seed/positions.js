const Skill = require('../models/Skill');
const Position = require('../models/Position');

const data = [
  {
    name: 'Software Engineer, Frontend Chapter Lead',
    company: 'Spreetail',
    linkURL: 'http://spreetail.com/',
    description:
      'I used to split my time between frontend chapter duties and working on a squad developing internal tools to support the Business Development department. On the BD squad, I worked with product owners and users to identify problems and develop solutions which improved day-to-day operations and supported new processes. I worked throughout the full stack of our web apps.',
    startDate: new Date(2016, 4, 1),
    endDate: new Date(2017, 10, 1),
    skills: [
      'JavaScript',
      'C#',
      'CSS3',
      'SQL',
      'Visual Basic',
      'Knockout.js',
      'gulp',
      'ASP.NET',
      'jQuery',
      'HTML5',
      'Sass',
      'Mocha',
      'Chai',
      'Karma',
      'ES6+',
      'Webpack',
    ],
  },
  {
    name: 'Software Engineer and Developer Intern',
    company: 'Spreetail',
    linkURL: 'http://spreetail.com/',
    description:
      'I developed internal tools to support the various business operations that keep Spreetail going. I frequently worked directly with users to identify specific issues that could be solved with software.',
    startDate: new Date(2014, 4, 1),
    endDate: new Date(2016, 4, 1),
    skills: [
      'JavaScript',
      'C#',
      'CSS3',
      'SQL',
      'Visual Basic',
      'Knockout.js',
      'ASP.NET',
      'jQuery',
      'Mongo',
      'HTML5',
    ],
  },
  {
    name: 'Frontend Chapter Lead',
    company: 'Spreetail',
    linkURL: 'http://spreetail.com/',
    description:
      'I make sure frontend software development at Spreetail is as great as it can be. I determine the standards and practices needed to ensure successful user interface development and facilitate adoption across projects and teams. I also help individual developers grow their frontend development skills.',
    startDate: new Date(2017, 10, 1),
    skills: [
      'JavaScript',
      'CSS3',
      'Knockout.js',
      'jQuery',
      'Mongo',
      'HTML5',
      'Sass',
      'Mocha',
      'Chai',
      'Karma',
      'ES6+',
      'Webpack',
      'React',
      'Redux',
      'Rollup',
    ],
  },
];

module.exports = Array.prototype.map.bind(data, positionData => {
  return Skill.find({ name: { $in: positionData.skills } }).then(skills => {
    positionData.skills = skills;
    return new Position(positionData).save(err => {
      if (err) {
        console.log(`"${positionData.name}" Position Error: ${err}`);
      }
    });
  });
});
