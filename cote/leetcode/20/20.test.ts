import validParentheses from "./20";

const testCases = [
  {
    s: "()",
    result: true,
  },
  {
    s: "()[]{}",
    result: true,
  },
  {
    s: "(]",
    result: false,
  },
];

describe("20. Valid Parentheses", () =>
  testCases.forEach(({ s, result }, index) =>
    it(`case ${index + 1}.`, () => expect(validParentheses(s)).toEqual(result))
  ));
