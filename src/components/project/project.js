import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import projectStyles from './project.module.css';

const imageQuery = graphql`
  query {
    blossomIcon: file(relativePath: { eq: "blossom-icon.png" }) {
      ...iconImage
    }

    blossomScreenshot: file(relativePath: { eq: "blossom-screenshot.png" }) {
      ...screenshotImage
    }

    generativeMusicIcon: file(
      relativePath: { eq: "generative-music-icon.png" }
    ) {
      ...iconImage
    }

    generativeMusicScreenshot: file(
      relativePath: { eq: "generative-music-screenshot.png" }
    ) {
      ...screenshotImage
    }
  }
`;

const Project = ({
  id,
  title,
  tagLine,
  siteUrl,
  sourceUrl,
  description,
  query,
}) => (
  <div className={projectStyles.container}>
    <div className={projectStyles.innerContainer}>
      <div className={projectStyles.screenshot}>
        <StaticQuery
          query={imageQuery}
          render={data => (
            <a href={siteUrl}>
              <Img fluid={data[`${id}Screenshot`].childImageSharp.fluid} />
            </a>
          )}
        />
      </div>
      <div className={projectStyles.text}>
        <h1 className={projectStyles.title}>
          <span className={projectStyles.icon}>
            <StaticQuery
              query={imageQuery}
              render={data => (
                <Img fluid={data[`${id}Icon`].childImageSharp.fluid} />
              )}
            />
          </span>
          {title}
        </h1>
        <h2>
          <i>{tagLine}</i>
        </h2>
        <p>{description}</p>
        <p>
          <a href={siteUrl}>Site</a> | <a href={sourceUrl}>Source Code</a>
        </p>
      </div>
    </div>
  </div>
);

export default Project;
