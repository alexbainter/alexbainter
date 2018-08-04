import ratings from './ratings';
import appendId from './append-id';

const skillsByRating = {
  // master
  [ratings[4].name]: [],
  // expert
  [ratings[3].name]: [
    'JavaScript',
    'ES6+',
    'Knockout.js',
    'Karma',
    'Webpack',
    'Redux',
    'Mocha + Chai',
  ],
  // proficient
  [ratings[2].name]: [
    'C#',
    'React',
    'Java',
    'CSS3',
    'Visual Basic',
    'Sass',
    'gulp',
    'ASP.NET',
    'jQuery',
    'Node',
    'HTML5',
    'Angular (2+)',
    'Yeoman',
    'Express',
  ],
  // beginner
  [ratings[1].name]: [
    'SQL',
    'R',
    'Android',
    'Mongo',
    'Less',
    'Pug',
    'Rollup',
    'Angular.js',
    'Web Audio API',
    'TypeScript',
  ],
  //familiar
  [ratings[0].name]: [],
};

const skills = ratings.reduce(
  (ratedSkills, rating) =>
    ratedSkills.concat(
      skillsByRating[rating.name].map(name => ({ name, rating }))
    ),
  []
);

export default appendId(skills);
