const Skill = require('../models/Skill');
const Rating = require('../models/Rating');

const data = [
  {
    name: 'JavaScript',
    rating: 'Expert'
  },
  {
    name: 'C#',
    rating: 'Expert'
  },
  {
    name: 'React',
    rating: 'Beginner'
  },
  {
    name: 'Redux',
    rating: 'Beginner'
  },
  {
    name: 'Angular',
    rating: 'Familiar'
  },
  {
    name: 'Java',
    rating: 'Proficient'
  },
  {
    name: 'CSS3',
    rating: 'Proficient'
  },
  {
    name: 'SQL',
    rating: 'Beginner'
  },
  {
    name: 'Visual Basic',
    rating: 'Proficient'
  },
  {
    name: 'Knockout',
    rating: 'Expert'
  },
  {
    name: 'C++',
    rating: 'Beginner'
  },
  {
    name: 'Sass',
    rating: 'Proficient'
  },
  {
    name: 'gulp',
    rating: 'Proficient'
  },
  {
    name: 'ASP.NET',
    rating: 'Proficient'
  },
  {
    name: 'R',
    rating: 'Beginner'
  },
  {
    name: 'Android',
    rating: 'Beginner'
  },
  {
    name: 'jQuery',
    rating: 'Proficient'
  },
  {
    name: 'Mongo',
    rating: 'Beginner'
  },
  {
    name: 'Node',
    rating: 'Proficient'
  },
  {
    name: 'Webpack',
    rating: 'Proficient'
  },
  {
    name: 'HTML5',
    rating: 'Proficient'
  },
  {
    name: 'Less',
    rating: 'Beginner'
  },
  {
    name: 'Pug',
    rating: 'Beginner'
  },
  {
    name: 'Express',
    rating: 'Beginner'
  }
];

module.exports = Array.prototype.map.bind(data, skillData => {
  return Rating.findOne({'name': skillData.rating}).then(rating => {
    if (!rating) {
      console.log(`"${skillData.name}" Skill Warning: No corresponding rating found for "${skillData.rating}"`);
    }

    return new Skill({
      name: skillData.name,
      rating: rating
    }).save(err => {
      if (err) {
        console.log(`"${skillData.name}" Skill Error: ${err}`);
      }
    });
  });
});
