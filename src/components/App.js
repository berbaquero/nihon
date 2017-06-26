import { h } from 'preact';
import font from '../styles/fonts';
import Card from '../components/Card';
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import { sortWords } from '../modules/operations';

const App = ({ words, phrases, numbers }) =>
  <main className={font.sansSerif}>
    <Heading text="Words" />
    {words
      .sort(sortWords)
      .map(word =>
        <Card
          romaji={word.romaji}
          english={word.english}
          hiragana={word.hiragana}
          type="word"
        />
      )}
    <Heading text="Phrases" />
    {phrases
      .sort(sortWords)
      .map(phrase =>
        <Card
          romaji={phrase.romaji}
          english={phrase.english}
          hiragana={phrase.hiragana}
          type="phrase"
        />
      )}
    <Heading text="Numbers" />
    {numbers.map(phrase =>
      <Card
        romaji={phrase.romaji}
        english={phrase.english}
        hiragana={phrase.hiragana}
        type="number"
      />
    )}
    <NavBar />
  </main>;

export default App;
