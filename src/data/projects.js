import appendId from './append-id';

const projects = [
  {
    name: 'alexbainter.com',
    linkURL: 'http://alexbainter.com',
    codeURL: 'https://github.com/metalex9/alexbainter',
    description:
      "You're looking at it! This is a static site built with React and hosted on AWS. I wanted the site's design to be clean and minimal, but with something interesting to watch on the home page. I consider the site an ongoing project and I try to update it frequently. Since the original launch, I've reduced its recurring hosting costs by 96%.",
    startDate: new Date(2017, 1, 1),
    skills: ['JavaScript', 'React', 'CSS3', 'Sass', 'Webpack', 'HTML5', 'ES6+'],
  },
  {
    name: 'Really Big Dictionary',
    linkURL: 'http://reallybigdictionary.com',
    codeURL: 'https://github.com/metalex9/big-dictionary',
    description:
      "A tiny website that displays definitions for English words from a third-party API. Click the link and you'll find out why I called it \"really big.\" I had a fun time designing this even though there isn't much to it. The neat part about this site is every word in the definition is actually a link to the definition of itself. If this were a serious project I would have made some indication of this feature; instead, it's left for the user to discover. I look forward to continuing to make small sites like this where I can play with the design.",
    startDate: new Date(2017, 2, 1),
    skills: [
      'JavaScript',
      'CSS3',
      'Sass',
      'Node',
      'Webpack',
      'HTML5',
      'Pug',
      'jQuery',
      'Express',
      'ES6+',
    ],
  },
  {
    name: 'Taco Builder',
    codeURL: 'https://github.com/metalex9/taco-builder',
    description:
      'A webapp which allows users to choose recipes from the Taco Fancy API. It was built in a short amount of time to demonstrate and practice building sites with React/Redux',
    startDate: new Date(2017, 4, 1),
    skills: [
      'JavaScript',
      'CSS3',
      'Sass',
      'Webpack',
      'HTML5',
      'Express',
      'React',
      'Redux',
      'ES6+',
    ],
  },
  {
    name: 'Generative Music',
    linkURL: 'https://generativemusic.alexbainter.com',
    codeURL: 'https://github.com/generative-music/site',
    description:
      'A collection of generative music pieces I made. Wikipedia describes generative music as, "[M]usic that is ever-different and changing, and that is created by a system." The music is created in the browser using the Web Audio API and the incredible Tone.js. The pieces will last as long as you\'re willing to listen, though no two "performances" are the same. This is the most creatively satisfying work I\'ve ever done; it\'s a wonderful intersection of making music and making software which are my two favorite things to do.',
    startDate: new Date(2018, 4, 1),
    skills: [
      'JavaScript',
      'CSS3',
      'Sass',
      'Node',
      'Webpack',
      'HTML5',
      'React',
      'ES6+',
      'Web Audio API',
    ],
  },
];

export default appendId(projects);
