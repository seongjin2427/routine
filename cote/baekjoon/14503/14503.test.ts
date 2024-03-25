import robotCleaner from "./14503";

const testCases = [
  {
    input: `3 3
1 1 0
1 1 1
1 0 1
1 1 1`,
    result: 1,
  },
  {
    input: `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`,
    result: 57,
  },
];

describe("14503. 로봇 청소기", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}`, () => expect(robotCleaner(input)).toEqual(result))
  ));
