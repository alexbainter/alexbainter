import ratings from './ratings';

const skillsByRating = {
  // master
  [ratings[4]]: [],
  // expert
  [ratings[3]]: [
    'JavaScript',
    'ES6+',
    'Knockout.js',
    'Karma',
    'Webpack',
    'Redux',
  ],
  // proficient
  [ratings[2]]: [
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
    'Mocha',
    'Chai',
    'Angular (2+)',
    'Yeoman',
  ],
  // beginner
  [ratings[1]]: [
    'SQL',
    'R',
    'Android',
    'Mongo',
    'Less',
    'Pug',
    'Express',
    'Rollup',
    'Angular.js',
  ],
  //familiar
  [ratings[0]]: [],
};

const skills = Object.keys(skillsByRating).reduce((ratedSkills, rating) =>
  ratedSkills.concat(skillsByRating[rating].map(name => ({ name, rating })))
);

export default skills;
