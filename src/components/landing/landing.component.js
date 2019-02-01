import React from 'react';
import { Link } from 'gatsby';
import landingStyles from './landing.module.css';

const Landing = () => (
  <div className={landingStyles.container}>
    <div className={landingStyles.content}>
      <h1 className={landingStyles.fontWeightNormal}>Alex Bainter</h1>
      <h3 className={landingStyles.fontWeightNormal}>
        <p>
          Hi, I'm Alex. I'm a web developer who likes to create audio/visual
          experiences both digital and not.
        </p>
        <p>
          Scroll down to see some of my work. Or you could check out{' '}
          <a href="https://medium.com/@metalex9" target="_blank">
            stuff I've posted on Medium.
          </a>
        </p>
        <p>
          Send me an email at{' '}
          <a href={`mailto:alex@alexbainter.com?subject="Hi"`}>
            alex@alexbainter.com
          </a>{' '}
          if you have feedback, or you'd like to work together, or just to say
          'hi.'
        </p>
      </h3>
    </div>
  </div>
);

export default Landing;
