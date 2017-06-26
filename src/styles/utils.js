import { css } from 'glamor';

const baseSpacing = 4; // pixels

const spacing = step => {
  if (step % 1 !== 0)
    throw new Error('Spacing Error: step must be an integer.');
  return step * baseSpacing;
};

const compose = (...args) => {
  return args.join(' ');
};

// hexagonal for glamor
const CSS = (style, ...classes) =>
  classes.concat(style ? css(style) : '').join(' ');

export { compose, CSS as css, spacing };
