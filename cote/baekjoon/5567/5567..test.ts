import wedding from "./5567";

const testCases = [
  {
    input: `6
5
1 2
1 3
3 4
2 3
4 5`,
    result: 3,
  },
  {
    input: `6
5
2 3
3 4
4 5
5 6
2 5`,
    result: 0,
  },
];

describe("5567. 결혼식", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(wedding(input)).toEqual(result))
  ));
