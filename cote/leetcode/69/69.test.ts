import sqrt from "./69";

const testCases = [
  {
    x: 4,
    result: 2,
  },
  {
    x: 8,
    result: 2,
  },
];

describe("69. Sqrt(x)", () =>
  testCases.forEach(({ x, result }, index) =>
    it(`case ${index + 1}.`, () => expect(sqrt(x)).toEqual(result))
  ));
