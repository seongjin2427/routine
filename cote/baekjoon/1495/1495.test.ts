import guitarlist from "./1495";

const testCases = [
  {
    input: `3 5 10
5 3 7`,
    result: 10,
  },
  {
    input: `4 8 20
15 2 9 10`,
    result: -1,
  },
  {
    input: `14 40 243
74 39 127 95 63 140 99 96 154 18 137 162 14 88`,
    result: 238,
  },
];

describe("1495. 기타리스트", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}`, () => expect(guitarlist(input)).toEqual(result))
  ));
