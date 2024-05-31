import { makeTreeNode } from "../../@common/tree";
import balancedBinaryTree from "./110";

const testCases = [
  {
    root: makeTreeNode([3, 9, 20, null, null, 15, 7]),
    result: true,
  },
  {
    root: makeTreeNode([1, 2, 2, 3, 3, null, null, 4, 4]),
    result: false,
  },
  {
    root: makeTreeNode([]),
    result: true,
  },
];

describe("100. Balanced Binary Tree", () =>
  testCases.forEach(({ root, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(balancedBinaryTree(root)).toEqual(result))
  ));
