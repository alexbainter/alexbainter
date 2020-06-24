import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import landingStyles from './landing.module.css';

const Landing = ({ title, children, scrollDownPrompt = false }) => {
  const [isScrollHintVisible, setIsScrollHintVisible] = useState(
    scrollDownPrompt
  );
  const onScroll = useCallback(e => {
    if (window.scrollY > 100) {
      setIsScrollHintVisible(false);
      window.removeEventListener('scroll', onScroll);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.content}>
        <h1 className={landingStyles.fontWeightNormal}>{title}</h1>
        <h3 className={landingStyles.fontWeightNormal}>{children}</h3>
      </div>
      <div
        className={landingStyles.footer}
        style={{ opacity: isScrollHintVisible ? 1 : 0 }}
      >
        scroll down
      </div>
    </div>
  );
};

export default Landing;
