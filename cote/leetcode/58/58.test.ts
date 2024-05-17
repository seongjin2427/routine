import lengthOfLastWord from "./58";

const testCases = [
  {
    s: "Hello World",
    result: 5,
  },
  {
    s: "   fly me   to   the moon  ",
    result: 4,
  },
  {
    s: "luffy is still joyboy",
    result: 6,
  },
];

describe("58. Length of Last Word", () =>
  testCases.forEach(({ s, result }, index) =>
    it(`case ${index + 1}.`, () => expect(lengthOfLastWord(s)).toEqual(result))
  ));
