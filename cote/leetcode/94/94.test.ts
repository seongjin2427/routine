import { makeTreeNode } from "../@common/tree";
import binaryTreeInorderTraversal from "./94";

const testCases = [
  {
    root: makeTreeNode([1, null, 2, 3]),
    result: [1, 3, 2],
  },
  {
    root: makeTreeNode([]),
    result: [],
  },
  {
    root: makeTreeNode([1]),
    result: [1],
  },
];

describe("94. Binary Tree Inorder Traversal", () =>
  testCases.forEach(({ root, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(binaryTreeInorderTraversal(root)).toEqual(result))
  ));
