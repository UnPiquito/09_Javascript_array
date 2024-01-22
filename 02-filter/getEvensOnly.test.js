import getEvensOnly from "./getEvensOnly.js";

describe("Given getEvensOnly function", () => {
  test("When an array of numbers is given, then an array with the even numbers should be returned", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const expected = [ 2, 12, 42, 28 ];

    const numberEven = getEvensOnly(COUNTERS);

    expect(numberEven).toEqual(expected);
  });
});
