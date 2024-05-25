import binaryTreeInorderTraversal from "./94";

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const makeTreeNode = (arr: number[]): TreeNode | null => {
  if (arr.length === 0) return null;

  // Create an array of TreeNode objects or null
  let nodes: (TreeNode | null)[] = arr.map((val) =>
    val !== null ? new TreeNode(val) : null
  );

  // The root is the first element
  let root = nodes[0];
  let queue: (TreeNode | null)[] = [root];

  let i = 1; // Index for nodes array
  while (i < nodes.length) {
    let current = queue.shift();
    if (current !== null) {
      // Assign left child
      if (i < nodes.length && nodes[i] !== null) {
        current.left = nodes[i];
        queue.push(current.left);
      }
      i++;
      // Assign right child
      if (i < nodes.length && nodes[i] !== null) {
        current.right = nodes[i];
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
};

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
