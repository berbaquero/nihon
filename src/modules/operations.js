const sortWords = (wordA, wordB) => {
  const englishA = wordA.english.toUpperCase();
  const englishB = wordB.english.toUpperCase();
  if (englishA < englishB) {
    return -1;
  }
  if (englishA > englishB) {
    return 1;
  }
  return 0;
};

export { sortWords };
