import longestPalindrome from "./12904";

const testCases = [
  {
    s: "abcdcba",
    result: 7,
  },
  {
    s: "abacde",
    result: 3,
  },
  {
    s: "",
    result: 0,
  },
];

describe("12904. 가장 긴 팰린드롬", () =>
  testCases.forEach(({ s, result }, index) =>
    it(`case ${index + 1}.`, () => expect(longestPalindrome(s)).toEqual(result))
  ));
