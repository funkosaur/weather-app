function capitalizeEachLetterInWord(wordString) {
  return wordString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}

export default capitalizeEachLetterInWord;
