import feedMonkeys from "./getLongWords.js";

describe("Given getLongWords function", () => {
  test("When array LANGUAGES content is provided, then an array with the greatter than 5 word should be returned", () => {
    const WORDS = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected = ["JavaScript", "TypeScript"];

    const result = feedMonkeys(WORDS);

    expect(result).toEqual(expected);
  });

  test("When array BEATLES content is provided, then an array with the greatter than 5 word should be returned", () => {
    const WORDS = ["John", "George", "Paul", "Ringo"];
    const expected = ["George", "Ringo"];

    const result = feedMonkeys(WORDS);

    expect(result).toEqual(expected);
  });
});
