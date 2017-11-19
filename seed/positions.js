const Skill = require('../models/Skill');
const Position = require('../models/Position');

const data = [
  {
    name: 'Software Engineer, Frontend Chapter Lead',
    company: 'Spreetail',
    linkURL: 'http://spreetail.com/',
    description:
      'I develop internal tools to support the Business Development department. I work with product owners and users to identify problems and develop solutions which both improve day-to-day operations and support new processes. I work throughout the full stack of our web apps. As the Frontend Chapter Lead, I drive process improvements, standards, research, training, and personal development among developers with an expressed interest in frontend technologies.',
    startDate: new Date(2016, 4, 1),
    endDate: null,
    skills: [
      'JavaScript',
      'C#',
      'CSS3',
      'SQL',
      'Visual Basic',
      'Knockout',
      'gulp',
      'ASP.NET',
      'jQuery',
      'Mongo',
      'HTML5',
      'Sass',
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
      'Knockout',
      'ASP.NET',
      'jQuery',
      'Mongo',
      'HTML5',
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
