import { h, render } from 'preact';
import App from './components/App';
import words from '../data/words';
import phrases from '../data/phrases';
import numbers from '../data/numbers';

render(
  <App words={words} phrases={phrases} numbers={numbers} />,
  document.getElementById('app-container')
);
