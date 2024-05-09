import eight from "./1105";

const testCases = [
  {
    input: "1 10",
    result: 0,
  },
  {
    input: "88 88",
    result: 2,
  },
  {
    input: "800 899",
    result: 1,
  },
  {
    input: "8808 8880",
    result: 2,
  },
];

describe("1105. 팔", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(eight(input)).toEqual(result))
  ));
