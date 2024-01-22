import getWordFromValues from "./getWordFromValues.js";

describe("Given getWordFromValues function", () => {
  test("When an array of numbers is given, then the exected array should be returned", () => {
    const VALUES = [1, 2, 3];
    const expected = "123";

    const wordFromValues = getWordFromValues(VALUES);

    expect(wordFromValues).toBeDefined();
    expect(wordFromValues).toEqual(expected);
  });
});
