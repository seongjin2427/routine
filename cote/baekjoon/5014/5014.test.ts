import startlink from "./5014";

const testCases = [
  {
    input: `10 1 10 2 1`,
    result: 6,
  },
  {
    input: `100 2 1 1 0`,
    result: "use the stairs",
  },
];

describe("5014. 스타트링크", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(startlink(input)).toEqual(result))
  ));
