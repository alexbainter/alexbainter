import React, { useEffect, useState } from 'react';
import colors from 'material-colors';
import colorConvert from 'color-convert';
import coloredContainerStyles from './colored-container.module.css';

const BG_LUMINENCE_THRESHOLD = 0.6;

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

const ColoredContainer = ({ children }) => {
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
      className={coloredContainerStyles.coloredContainer}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

export default ColoredContainer;
