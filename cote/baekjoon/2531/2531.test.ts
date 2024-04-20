import rotateSushi from "./2531";

const testCases = [
  {
    input: `8 30 4 30
7
9
7
30
2
7
9
25`,
    result: 5,
  },
  {
    input: `8 50 4 7
2
7
9
25
7
9
7
30`,
    result: 4,
  },
  {
    input: `8 50 4 1
2
2
2
2
2
2
2
2`,
    result: 2,
  },
];

describe("2531. 회전 초밥", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(rotateSushi(input)).toEqual(result))
  ));
