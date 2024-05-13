import removeDuplicatesfromSortedArray from "./26";

const testCases = [
  {
    nums: [1, 1, 2],
    result: 2,
  },
  {
    nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    result: 5,
  },
];

describe("26. Remove Duplicates from Sorted Array", () =>
  testCases.forEach(({ nums, result }, index) =>
    it(`case ${index + 1}.`, () =>
    expect(removeDuplicatesfromSortedArray(nums)).toEqual(result))
  ));
