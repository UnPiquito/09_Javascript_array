/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

const extractCountriesWithFiveCharactersOrFewer = (COUNTRIES) => {
  const filteredCountries = COUNTRIES.filter(
    (COUNTRIES) => COUNTRIES.length <= 5,
  );

  return filteredCountries;
};

export default extractCountriesWithFiveCharactersOrFewer;
