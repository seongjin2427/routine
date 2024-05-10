import longestCommonPrefix from "./14";

const testCases = [
  {
    strs: ["flower", "flow", "flight"],
    result: "fl",
  },
  {
    strs: ["dog", "racecar", "car"],
    result: "",
  },
];

describe("14. Longest Common Prefix", () =>
  testCases.forEach(({ strs, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(longestCommonPrefix(strs)).toEqual(result))
  ));
