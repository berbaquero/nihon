import { css } from "glamor";
import { spacing, classes } from "./utils";

//// SIDES

const top = step => {
  return css({
    paddingTop: spacing(step),
  });
};

const bottom = step => {
  return css({
    paddingBottom: spacing(step),
  });
};

const left = step => {
  return css({
    paddingLeft: spacing(step),
  });
};

const right = step => {
  return css({
    paddingRight: spacing(step),
  });
};

// COMPOSED

const horizontal = step => {
  return classes(left(step), right(step));
};

const vertical = step => {
  return classes(top(step), bottom(step));
};

const all = step => {
  return classes(horizontal(step), vertical(step));
};

export default {
  top,
  bottom,
  left,
  right,
  horizontal,
  vertical,
  all,
};
