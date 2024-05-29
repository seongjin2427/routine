import { makeTreeNode } from "../@common/tree";
import convertSortedArrayToBinarySearchTree from "./108";

const testCases = [
  {
    nums: [-10, -3, 0, 5, 9],
    result: makeTreeNode([0, -3, 9, -10, null, 5]),
  },
  {
    nums: [1, 3],
    result: makeTreeNode([3, 1]),
  },
];

describe("108. Convert Sorted Array to Binary Search Tree", () =>
  testCases.forEach(({ nums, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(convertSortedArrayToBinarySearchTree(nums)).toEqual(result))
  ));
