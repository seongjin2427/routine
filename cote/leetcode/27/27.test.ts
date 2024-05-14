import removeElement from "./27";

const testCases = [
  {
    nums: [3, 2, 2, 3],
    val: 3,
    result: 2,
    expectedNums: [2, 2],
  },
  {
    nums: [0, 1, 2, 2, 3, 0, 4, 2],
    val: 2,
    result: 5,
    expectedNums: [0, 0, 1, 3, 4],
  },
];

describe("27. Remove Element", () =>
  testCases.forEach(({ nums, val, result, expectedNums }, index) =>
    it(`case ${index + 1}.`, () => {
      expect(removeElement(nums, val)).toEqual(result);

      for (let i = 0; i < expectedNums.length; i++) {
        expect(nums[i]).toEqual(expectedNums[i]);
      }
    })
  ));
