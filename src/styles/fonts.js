import { css } from "glamor";

const sansSerif = css({
  fontFamily:
    "-apple-system, BlinkMacSystemFont, -apple-system-font, 'Helvetica Neue', Helvetica, Arial, sans-serif",
});

const scale = ["16px", "20px", "24px", "28px", "30px"];

const size = step => {
  return css({ fontSize: scale[step] });
};

export default { sansSerif, size };
