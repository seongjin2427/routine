import { makeTreeNode } from "../../@common/tree";
import isSymmetricTree from "./101";

const testCases = [
  {
    root: makeTreeNode([1, 2, 2, 3, 4, 4, 3]),
    result: true,
  },
  {
    root: makeTreeNode([1, 2, 2, null, 3, null, 3]),
    result: false,
  },
];

describe("101. Symmetric Tree", () =>
  testCases.forEach(({ root, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(isSymmetricTree(root)).toEqual(result))
  ));
