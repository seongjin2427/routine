import convertWord from "./43163";

const testCases = [
  {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log", "cog"],
    result: 4,
  },
  {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log"],
    result: 0,
  },
];

describe("43163. 단어 변환", () => {
  testCases.forEach(({ begin, target, words, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(convertWord(begin, target, words)).toEqual(result))
  );
});
