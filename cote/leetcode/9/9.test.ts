import palindromeNumber from "./9";

const testCases = [
  {
    x: 121,
    result: true,
  },
  {
    x: -121,
    result: false,
  },
  {
    x: 10,
    result: false,
  },
];

describe("9. Palinedrome Number", () =>
  testCases.forEach(({ x, result }, index) =>
    it(`case ${index + 1}.`, () => expect(palindromeNumber(x)).toEqual(result))
  ));
