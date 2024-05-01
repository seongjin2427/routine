import doyoungFood from "./2961";

const testCases = [
  {
    input: `1
3 10`,
    result: 7,
  },
  {
    input: `2
3 8
5 8`,
    result: 1,
  },
  {
    input: `4
1 7
2 6
3 8
4 9`,
    result: 1,
  },
];

describe("2961. 도영이가 만든 맛있는 음식", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(doyoungFood(input)).toEqual(result))
  ));
