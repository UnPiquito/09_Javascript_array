/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

const getLongWords = (WORDS) => {
  const greaterWords = [];

  for (let index = 0; index < WORDS.length; index++) {
    if (WORDS[index].length >= 5) {
      greaterWords.push(WORDS[index]);
    }
  }
  return greaterWords;
};

export default getLongWords;
