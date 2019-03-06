import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import landingStyles from './landing.module.css';

const Landing = () => {
  const [isScrollHintVisible, setIsScrollHintVisible] = useState(true);
  const onScroll = e => {
    if (window.scrollY > 100) {
      setIsScrollHintVisible(false);
      window.removeEventListener('scroll', onScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  return (
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
            </a>
            . Tweet at @
            <a href="https://twitter.com/alex_bainter" target="_blank">
              alex_bainter
            </a>
          </p>
        </h3>
      </div>
      <div
        className={landingStyles.footer}
        style={{ opacity: isScrollHintVisible ? 1 : 0 }}
      >
        scroll down to see work
      </div>
    </div>
  );
};

export default Landing;
