import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

describe("Given sumNumbersFromInitialValue function", () => {
  test("When InitialValue its 0, then an array with the sum should be resturned", () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialValue = 0;
    const expected = 15;

    const result = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(result).toEqual(expected);
  });

  test("When InitialValue its 10, then an array with the sum should be resturned", () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialValue = 10;
    const expected = 25;

    const result = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(result).toEqual(expected);
  });
});
