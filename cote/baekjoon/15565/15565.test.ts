import cuteLion from "./15565";

const testCases = [
  {
    input: `10 3
1 2 2 2 1 2 1 2 2 1`,
    result: 6,
  },
  {
    input: `10 4
1 1 1 2 1 2 1 2 2 1`,
    result: 5,
  },
  {
    input: `10 10
1 1 1 2 1 2 1 2 2 1`,
    result: -1,
  },
];

describe("15565. 귀여운 라이언", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(cuteLion(input)).toEqual(result))
  ));
