import { makeTreeNode } from "../../@common/tree";
import sameTree from "./100";

const testCases = [
  {
    p: makeTreeNode([1, 2, 3]),
    q: makeTreeNode([1, 2, 3]),
    result: true,
  },
  {
    p: makeTreeNode([1, 2]),
    q: makeTreeNode([1, null, 2]),
    result: false,
  },
  {
    p: makeTreeNode([1, 2, 1]),
    q: makeTreeNode([1, 1, 2]),
    result: false,
  },
];

describe("10. Same Tree", () =>
  testCases.forEach(({ p, q, result }, index) =>
    it(`case ${index + 1}.`, () => expect(sameTree(p, q)).toEqual(result))
  ));
