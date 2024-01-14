import capitalizeMates from "./capitalizeMates.js";
import sumNumbersFromInitialValue from "./capitalizeMates.js";

describe("Given capitalizeMates function", () => {
  test("When an strings array is given, then an array with an array of strings with capitalized names should be returned", () => {
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const result = capitalizeMates(MATES);

    expect(result).toEqual(expected);
  });
});
