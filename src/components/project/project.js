import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import projectStyles from './project.module.css';

const Project = () => (
  <div className={projectStyles.container}>
    <div className={projectStyles.screenshot}>
      <StaticQuery
        query={graphql`
          query {
            screenshot: file(relativePath: { eq: "blossom-screenshot.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <a href="https://blossom.alexbainter.com">
            <Img fluid={data.screenshot.childImageSharp.fluid} />
          </a>
        )}
      />
    </div>
    <h1 className={projectStyles.title}>
      <span className={projectStyles.icon}>
        <StaticQuery
          query={graphql`
            query {
              icon: file(relativePath: { eq: "blossom-icon.png" }) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => <Img fluid={data.icon.childImageSharp.fluid} />}
        />
      </span>
      Blossom
    </h1>
    <h2>
      <i>A lovely interactive music generator</i>
    </h2>
    <div className={projectStyles.description}>
      <p>
        Much like its obvious inspiration "Bloom", the terrific iPhone app by
        Brian Eno and Peter Chilvers, Blossom allows you to click or tap to
        create an ever-evolving music and color experience. It enables anyone to
        create beautiful ambient music inside their browser. Also inlcuded is an
        endless self-playing functionality, with which one can either play along
        or simply watch and enjoy.
      </p>
      <p>
        <a href="https://blossom.alexbainter.com">site</a> |{' '}
        <a href="https://github.com/generative-music/blossom">source code</a>
      </p>
    </div>
  </div>
);

export default Project;
