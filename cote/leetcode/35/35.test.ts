import searchInsertPosition from "./35";

const testCases = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
    result: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    result: 1,
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
    result: 4,
  },
];

describe("35. Search Insert Position", () =>
  testCases.forEach(({ nums, target, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(searchInsertPosition(nums, target)).toEqual(result))
  ));
