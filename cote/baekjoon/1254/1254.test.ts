import makePalindrome from "./1254";

const testCases = [
  {
    input: "abab",
    result: 5,
  },
  {
    input: "abacaba",
    result: 7,
  },
  {
    input: "qwerty",
    result: 11,
  },
  {
    input: "abdfhdyrbdbsdfghjkllkjhgfds",
    result: 38,
  },
];

describe("1254. 팰린드롬 만들기", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(makePalindrome(input)).toEqual(result))
  ));
