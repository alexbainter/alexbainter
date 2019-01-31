import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import colors from 'material-colors';
import colorConvert from 'color-convert';
import landingStyles from './landing.module.css';

const BG_LUMINENCE_THRESHOLD = 0.5;

// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
const getLuminence = colorHex => {
  const rgb = colorConvert.hex.rgb(colorHex);
  const [r, g, b] = rgb.map(x => {
    const pct = x / 255;
    return pct <= 0.03928 ? pct / 12.92 : ((pct + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const isSufficientlyLight = colorHex =>
  getLuminence(colorHex) > BG_LUMINENCE_THRESHOLD;

const backgroundColors = Reflect.ownKeys(colors)
  .filter(color => typeof colors[color] === 'object')
  .reduce(
    (colorHexes, color) =>
      colorHexes.concat(
        Reflect.ownKeys(colors[color])
          .filter(
            value =>
              !value.startsWith('a') && colors[color][value].startsWith('#')
          )
          .map(value => colors[color][value])
      ),
    []
  )
  .filter(colorHex => isSufficientlyLight(colorHex));

const getRandomColor = previousColor => {
  const newColors =
    typeof previousColor === 'string'
      ? backgroundColors.filter(color => color !== previousColor)
      : backgroundColors;
  return newColors[Math.floor(Math.random() * newColors.length)];
};

const Landing = () => {
  const [bgColor, setBgColor] = useState(getRandomColor());
  useEffect(() => {
    setTimeout(() => {
      setBgColor(currentBgColor => getRandomColor(currentBgColor));
      setInterval(() => {
        setBgColor(currentBgColor => getRandomColor(currentBgColor));
      }, 20000);
    }, 10000);
  }, []);
  return (
    <div
      className={landingStyles.container}
      style={{ backgroundColor: bgColor }}
    >
      <div className={landingStyles.content}>
        <h1 className={landingStyles.fontWeightNormal}>Alex Bainter</h1>
        <h3 className={landingStyles.fontWeightNormal}>
          <p>
            Hi, I'm Alex. I'm a web developer who likes to create audio/visual
            experiences both digital and not.
          </p>
          <p>
            You can scroll down to see some of my work. Or you could check out{' '}
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
};

export default Landing;
