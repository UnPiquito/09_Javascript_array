import feedMonkeys from "./feedMonkeys.js";

describe("Given feedMonkeys function", () => {
  test("When a 🍌 is provided, should return an array should be returned", () => {
    const fruit = "🍌";
    const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const result = feedMonkeys(["🐒", "🦍", "🦧"], fruit);

    expect(result).toEqual(expected);
  });

  test("When a 🍎 is provided, should return an array should be returned", () => {
    const fruit = "🍎";
    const expected = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    const result = feedMonkeys(["🐒", "🦍", "🦧"], fruit);

    expect(result).toEqual(expected);
  });
});
