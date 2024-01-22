import extractVipsNames from "./extractVipsNames.js";
describe("Given extractVipsNames function", () => {
  test("When an array of vips is given, then an array with the vips names should be returned ", () => {
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];

    const result = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const vipsNames = extractVipsNames(VIPS);

    expect(vipsNames).toEqual(result);
  });
});
