import romanToInteger from "./13";

const testCases = [
  {
    s: "III",
    result: 3,
  },
  {
    s: "LVIII",
    result: 58,
  },
  {
    s: "MCMXCIV",
    result: 1994,
  },
];

describe("13. Roman to Integer", () =>
  testCases.forEach(({ s, result }, index) =>
    it(`case ${index + 1}.`, () => expect(romanToInteger(s)).toEqual(result))
  ));
