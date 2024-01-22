import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer function", () => {
  test("When an array of strings is given, then an array with the greatter than 5 word should be returned", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expected = ["Italy"];

    const numberWord = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(numberWord).toEqual(expected);
  });
});
