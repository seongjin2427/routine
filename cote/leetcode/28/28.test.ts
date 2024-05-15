import findTheIndexOfTheFirstOccurrenceInAString from "./28";

const testCases = [
  {
    haystack: "sadbutsad",
    needle: "sad",
    result: 0,
  },
  {
    haystack: "leetcode",
    needle: "leeto",
    result: -1,
  },
];

describe("28. Find the Index of the First Occurrence in a String", () =>
  testCases.forEach(({ haystack, needle, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(
        findTheIndexOfTheFirstOccurrenceInAString(haystack, needle)
      ).toEqual(result))
  ));
