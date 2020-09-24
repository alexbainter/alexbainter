import React from 'react';
import { graphql, Link } from 'gatsby';
import ColoredContainer from '../components/colored-container/colored-container';
import SEO from '../components/seo';
import Landing from '../components/landing/landing';
import Project from '../components/project/project';
import projects from '../data/projects/index';
import landingStyles from '../components/landing/landing.module.css';

const IndexPage = () => (
  <ColoredContainer>
    <SEO title="Hello 👋" keywords={['alex bainter']} />
    <Landing title="Alex Bainter" scrollDownPrompt>
      <p>
        Hi, I'm Alex. I'm a web developer who likes to create audio/visual
        experiences both digital and not.
      </p>
      <ul className={landingStyles.links}>
        <li className={landingStyles.linkItem}>
          <a href={`mailto:alex@alexbainter.com?subject="Hi"`}>
            alex@alexbainter.com
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://medium.com/@metalex9"
            target="_blank"
            rel="noreferrer noopener"
          >
            Medium
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://twitter.com/alex_bainter"
            target="_blank"
            rel="noreferrer noopener"
          >
            @alex_bainter (Twitter)
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://www.instagram.com/alex.bainter/"
            target="_blank"
            rel="noreferrer noopener"
          >
            @alex.bainter (Instagram)
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://tinyletter.com/alexbainter"
            target="_blank"
            rel="noreferrer noopener"
          >
            Newsletter
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://www.patreon.com/alexbainter"
            target="_blank"
            rel="noreferrer noopener"
          >
            Patreon
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <a
            href="https://alexbainter.bandcamp.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bandcamp
          </a>
        </li>
        <li className={landingStyles.linkItem}>
          <Link to="/tip">Tips</Link>
        </li>
      </ul>
      <p>Scroll down to see some of my work.</p>
    </Landing>
    {projects.map(project => (
      <Project {...project} key={project.id} />
    ))}
  </ColoredContainer>
);

export const iconImage = graphql`
  fragment iconImage on File {
    childImageSharp {
      fluid(maxWidth: 50, maxHeight: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const screenshotImage = graphql`
  fragment screenshotImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default IndexPage;
