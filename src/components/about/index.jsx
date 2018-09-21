import React from 'react';
import {
  faGithub,
  faStackOverflow,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import IconLink from './icon-link';
import 'styles/_about.scss';

const About = () => (
  <div>
    Hey! My name's Alex. I'm a software developer. Everyone knows software
    developers need their own websites, and this one is mine.
    <br />
    <br />
    If you'd like to contact me, you can do so at{' '}
    <a href="mailto:alexbainter@gmail.com?Subject=Hello!">
      alexbainter@gmail.com
    </a>
    .<br />
    <br />
    You can also find me at these other places:
    <ul className="link-container">
      <IconLink href="https://github.com/metalex9" faIcon={faGithub} />
      <IconLink
        href="http://stackoverflow.com/users/1762237/metalex9?tab=profile"
        faIcon={faStackOverflow}
      />
      <IconLink href="https://medium.com/@metalex9" faIcon={faMedium} />
    </ul>
  </div>
);

export default About;
