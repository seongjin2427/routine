import hi from "./1535";

const testCases = [
  {
    input: `3
1 21 79
20 30 25`,
    result: 50,
  },
  {
    input: `1
100
20`,
    result: 0,
  },
  {
    input: `8
100 15 1 2 3 4 6 5
49 40 1 2 3 4 5 4`,
    result: 59,
  },
  {
    input: `4
100 50 20 13
20 30 40 50`,
    result: 120,
  },
  {
    input: `8
100 26 13 17 24 33 100 99
34 56 21 1 24 34 100 99`,
    result: 135,
  },
  {
    input: `12
1 1 1 1 1 1 1 1 1 1 1 1
100 100 100 100 100 100 100 100 100 100 100 100`,
    result: 1200,
  },
];

describe("1535. 안녕", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(hi(input)).toEqual(result))
  ));
