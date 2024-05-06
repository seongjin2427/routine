import twoSum from "./1";

const testCases = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    result: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    result: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    result: [0, 1],
  },
];

describe("1. Two Sum", () =>
  testCases.forEach(({ nums, target, result }, index) =>
    it(`case ${index + 1}.`, () => expect(twoSum(nums, target)).toEqual(result))
  ));
