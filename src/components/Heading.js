import { h } from "preact";
import css, { color, margin, font } from "../styles";

const headingStyle = css(
  {
    color: color.black,
  },
  font.size(4),
  margin.top(0)
);

const Heading = ({ text }) => {
  return <h1 id={text} className={headingStyle}>{text}</h1>;
};

export default Heading;
