import React from 'react';
import { Link, graphql } from 'gatsby';
import ColoredContainer from '../components/colored-container/colored-container';
import SEO from '../components/seo';
import Landing from '../components/landing/landing.component';
import Project from '../components/project/project';
import projects from '../data/projects/index';

const IndexPage = () => (
  <ColoredContainer>
    <SEO title="Hello" keywords={['alex bainter']} />
    <Landing />
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
