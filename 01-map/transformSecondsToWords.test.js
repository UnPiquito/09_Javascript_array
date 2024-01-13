import transformSecondsToWords from "./transformSecondsToWords";
describe("Given transformSecondsToWords function", () => {
  test("When an array of numbers is given, then an array of strings should be returned", () => {
    const SECONDS = [2, 5, 100];
    const result = ["2", "5", "100"];

    const numberWord = transformSecondsToWords(SECONDS);

    expect(numberWord).toEqual(result);
  });
});
