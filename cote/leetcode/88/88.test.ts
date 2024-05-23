import mergeSortedArray from "./88";

const testCases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    result: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    result: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    result: [1],
  },
];

describe("88. Merge Sorted Array", () =>
  testCases.forEach(({ nums1, m, nums2, n, result }, index) =>
    it(`case ${index + 1}.`, () => {
      mergeSortedArray(nums1, m, nums2, n);
      expect(nums1).toEqual(result);
    })
  ));
