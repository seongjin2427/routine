import buyCards2 from "./16194";

const testCases = [
  {
    input: `4
1 5 6 7`,
    result: 4,
  },
  {
    input: `5
10 9 8 7 6`,
    result: 6,
  },
  {
    input: `10
1 1 2 3 5 8 13 21 34 55`,
    result: 5,
  },
  {
    input: `10
5 10 11 12 13 30 35 40 45 47`,
    result: 26,
  },
  {
    input: `4
5 2 8 10`,
    result: 4,
  },
  {
    input: `4
3 5 15 16`,
    result: 10,
  },
];

describe("16194. 카드 구매하기 1", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(buyCards2(input)).toEqual(result))
  ));
