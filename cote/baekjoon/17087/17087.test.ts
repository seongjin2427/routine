import hideAndSeek6 from "./17087";

const testCases = [
  {
    input: `3 3
1 7 11`,
    result: 2,
  },
  {
    input: `3 81
33 105 57`,
    result: 24,
  },
  {
    input: `1 1
1000000000`,
    result: 999999999,
  },
];

describe("17087. 숨박꼭질 6", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(hideAndSeek6(input)).toEqual(result))
  ));
