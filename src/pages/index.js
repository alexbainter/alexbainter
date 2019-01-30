import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Landing from '../components/landing/landing.component';

const IndexPage = () => (
  <div>
    <SEO title="Hello" keywords={['alex bainter']} />
    <Landing />
  </div>
);

export default IndexPage;
