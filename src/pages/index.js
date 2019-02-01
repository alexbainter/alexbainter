import React from 'react';
import { Link } from 'gatsby';
import ColoredContainer from '../components/colored-container/colored-container';
import SEO from '../components/seo';
import Landing from '../components/landing/landing.component';
import Project from '../components/project/project';

const IndexPage = () => (
  <ColoredContainer>
    <SEO title="Hello" keywords={['alex bainter']} />
    <Landing />
    <Project />
  </ColoredContainer>
);

export default IndexPage;
