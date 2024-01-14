/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

const sumNumbersFromInitialValue = (NUMBERS, initialValue) => {
  let arraySum = initialValue;

  for (let i = 0; i < NUMBERS.length; i++) {
    arraySum = arraySum + NUMBERS[i];
  }

  return arraySum;
};

export default sumNumbersFromInitialValue;
