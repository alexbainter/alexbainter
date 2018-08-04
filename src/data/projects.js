import appendId from './append-id';

const projects = [
  {
    name: 'alexbainter.com',
    linkURL: 'http://alexbainter.com',
    codeURL: 'https://github.com/metalex9/alexbainter',
    description:
      "You're looking at it! This is a static site built with React. I wanted the site's design to be clean and minimal, but with something interesting to watch on the home page. I continue to improve the site as my skills progress.",
    startDate: new Date(2017, 1, 1),
    skills: ['JavaScript', 'React', 'CSS3', 'Sass', 'Webpack', 'HTML5'],
  },
  {
    name: 'Really Big Dictionary',
    linkURL: 'http://reallybigdictionary.com',
    codeURL: 'https://github.com/metalex9/big-dictionary',
    description:
      "This is a tiny website that displays definitions for English words from a third-party API. Click the link and you'll find out why I called it \"really big.\" I had a fun time designing this even though there isn't much to it. The neat part about this site is every word in the definition is actually a link to the definition of itself. If this were a serious project I would have made some indication of this feature; instead, it's left for the user to discover. I look forward to continuing to make small sites like this where I can play with the design.",
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
    ],
  },
  {
    name: 'Taco Builder',
    codeURL: 'https://github.com/metalex9/taco-builder',
    description:
      'This is just the frontend of a site which allows users to choose recipes from the Taco Fancy API. It was built in a short amount of time to demonstrate and practice building sites with React/Redux',
    startDate: new Date(2017, 4, 1),
    skills: [
      'JavaScript',
      'CSS3',
      'Sass',
      'Node',
      'Webpack',
      'HTML5',
      'Express',
      'React',
      'Redux',
    ],
  },
];

export default appendId(projects);