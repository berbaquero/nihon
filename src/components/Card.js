import { h } from 'preact';
import css, { color, padding, margin, font } from '../styles';

const wrapStyle = css(
  {
    borderRadius: 7,
    color: color.white,
    fontWeight: 'bold',
    boxShadow: '0 3px 12px rgba(0, 0, 0, .5)',
  },
  padding.all(2),
  margin.bottom(5)
);

const hiraganaStyle = css({
  display: 'inline-block',
  fontWeight: 'normal',
});

const numberCardStyle = css({
  backgroundColor: color.orange,
});

const wordCardStyle = css({
  backgroundColor: color.purple,
});

const phraseCardStyle = css({
  backgroundColor: color.green,
});

const Card = ({ romaji, english, hiragana, type }) => {
  const isNumber = type && type === 'number';
  const isPhrase = type && type === 'phrase';
  const isWord = !isNumber && !isPhrase;

  const backgroundColor = isWord
    ? wordCardStyle
    : isNumber ? numberCardStyle : phraseCardStyle;

  return (
    <div className={`${backgroundColor} ${wrapStyle}`}>
      <div className={font.size(1)}>{english}</div>
      <div className={font.size(4)}>
        <span className={margin.right(2)}>{romaji}</span>
        <span className={margin.right(2)}>·</span>
        <span className={hiraganaStyle}>
          {hiragana}
        </span>
      </div>
    </div>
  );
};

export default Card;
