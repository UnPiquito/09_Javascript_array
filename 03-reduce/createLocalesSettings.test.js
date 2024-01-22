import createLocalesSettings from "./createLocalesSettings.js";

describe("Given createLocalesSettings function", () => {
  test("When an array of strings is given, then the exected array should be returned", () => {
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const expected = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    const Array = createLocalesSettings(LOCALES);

    expect(Array).toBeDefined();
    expect(Array).toEqual(expected);
  });
});
