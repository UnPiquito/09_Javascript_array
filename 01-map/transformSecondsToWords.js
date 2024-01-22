/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

const transformSecondsToWords = (SECONDS) => {
  const numberWord = SECONDS.map((element) => {
    return element.toString();
  });

  return numberWord;
};

export default transformSecondsToWords;
