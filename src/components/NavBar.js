import { h } from 'preact';
import css, { margin, padding, color } from '../styles';

const navStyle = css(
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  margin.all(4)
);

const linkStyle = css(
  {
    backgroundColor: color.white,
    color: color.black,
    border: '3px solid',
    textDecoration: 'none',
    transform: 'rotate(-13deg)',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  margin.right(3),
  padding.all(2)
);

const NavBar = () =>
  <nav className={navStyle}>
    <a className={linkStyle} href="#Words">Words</a>
    <a className={linkStyle} href="#Phrases">Phrases</a>
    <a className={linkStyle} href="#Numbers">Numbers</a>
  </nav>;

export default NavBar;
