import { css } from 'glamor';

const baseSpacing = 4; // pixels

const spacing = step => {
  if (step % 1 !== 0)
    throw new Error('Spacing Error: step must be an integer.');
  return step * baseSpacing;
};

const classes = (...args) => {
  return args.join(' ');
};

const csx = (style, ...classes) =>
  classes.concat(style ? css(style) : '').join(' ');

export { classes, csx as css, spacing };
