import standingInLine from "./1138";

const testCases = [
  {
    input: `4
2 1 1 0`,
    result: `4 2 1 3`,
  },
  {
    input: `5
0 0 0 0 0`,
    result: `1 2 3 4 5`,
  },
  {
    input: `6
5 4 3 2 1 0`,
    result: `6 5 4 3 2 1`,
  },
  {
    input: `7
6 1 1 1 2 0 0`,
    result: `6 2 3 4 7 5 1`,
  },
];

describe("1138. 한 줄로 서기", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(standingInLine(input)).toEqual(result))
  ));
