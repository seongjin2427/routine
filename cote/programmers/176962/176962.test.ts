import subjectProgressing from "./176962";

const testCases = [
  {
    plans: [
      ["korean", "11:40", "30"],
      ["english", "12:10", "20"],
      ["math", "12:30", "40"],
    ],
    result: ["korean", "english", "math"],
  },
  {
    plans: [
      ["science", "12:40", "50"],
      ["music", "12:20", "40"],
      ["history", "14:00", "30"],
      ["computer", "12:30", "100"],
    ],
    result: ["science", "history", "computer", "music"],
  },
  {
    plans: [
      ["aaa", "12:00", "20"],
      ["bbb", "12:10", "30"],
      ["ccc", "12:40", "10"],
    ],
    result: ["bbb", "ccc", "aaa"],
  },
  {
    plans: [
      ["a", "12:00", "5"],
      ["b", "12:10", "5"],
      ["c", "12:20", "5"],
    ],
    result: ["a", "b", "c"],
  },
  {
    plans: [
      ["a", "12:00", "30"],
      ["b", "12:10", "5"],
      ["c", "12:20", "5"],
    ],
    result: ["b", "c", "a"],
  },
  {
    plans: [
      ["a", "12:00", "5"],
      ["b", "12:10", "30"],
      ["c", "12:20", "5"],
    ],
    result: ["a", "c", "b"],
  },
  {
    plans: [
      ["a", "12:00", "30"],
      ["b", "12:10", "30"],
      ["c", "12:20", "5"],
    ],
    result: ["c", "b", "a"],
  },
  {
    plans: [
      ["a", "09:00", "10"],
      ["b", "09:10", "10"],
      ["c", "09:15", "10"],
      ["d", "09:30", "10"],
      ["e", "09:35", "10"],
    ],
    result: ["a", "c", "b", "e", "d"],
  },
];

describe("176962. 과제 진행", () =>
  testCases.forEach(({ plans, result }, index) =>
    it(`case ${index + 1}`, () =>
      expect(subjectProgressing(plans)).toEqual(result))
  ));
