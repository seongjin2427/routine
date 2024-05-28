import { makeTreeNode } from "../@common/tree";
import maximumDepthOfBinaryTree from "./104";

const testCases = [
  {
    root: makeTreeNode([3, 9, 20, null, null, 15, 7]),
    result: 3,
  },
  {
    root: makeTreeNode([1, null, 2]),
    result: 2,
  },
];

describe("104. Maximum Depth of Binary Tree", () =>
  testCases.forEach(({ root, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(maximumDepthOfBinaryTree(root)).toEqual(result))
  ));
