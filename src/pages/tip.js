import React from 'react';
import { Link } from 'gatsby';
import ColoredContainer from '../components/colored-container/colored-container';
import SEO from '../components/seo';
import Landing from '../components/landing/landing';
import landingStyles from '../components/landing/landing.module.css';

const TipPage = () => (
  <ColoredContainer>
    <SEO title="Tips 🙏" keywords={['alex bainter', 'tips']} />
    <Landing title="Sponsor Alex's work">
      <p>
        I don't typically charge for access to <Link to="/">my work</Link>. That
        way everyone has an opportunity to enjoy it.
      </p>
      <ul className={landingStyles.links}>
        <li className={landingStyles.linkItem}>
          <a
            href="https://play.generative.fm/donate"
            target="_blank"
            rel="noreferrer noopener"
          >
            How (and why) you can sponsor my work
          </a>
        </li>
      </ul>
      <p>Thank you!</p>
    </Landing>
  </ColoredContainer>
);

export default TipPage;
