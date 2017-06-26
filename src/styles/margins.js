import { css } from "glamor";
import { spacing, classes } from "./utils";

//// SIDES

const top = step => {
  return css({
    marginTop: spacing(step),
  });
};

const bottom = step => {
  return css({
    marginBottom: spacing(step),
  });
};

const left = step => {
  return css({
    marginLeft: spacing(step),
  });
};

const right = step => {
  return css({
    marginRight: spacing(step),
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
