import { makeTreeNode } from "../../@common/tree";
import minimumDepthOfBinaryTree from "./111";

const testCases = [
  {
    root: makeTreeNode([3, 9, 20, null, null, 15, 7]),
    result: 2,
  },
  {
    root: makeTreeNode([2, null, 3, null, 4, null, 5, null, 6]),
    result: 5,
  },
];

describe("111. Minimum Depth of Binary Tree", () =>
  testCases.forEach(({ root, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(minimumDepthOfBinaryTree(root)).toEqual(result))
  ));
