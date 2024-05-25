//* 94. Binary Tree Inorder Traversal
//* ❌ 실패
//* 구현

import { TreeNode } from "./94.test";

//* -100 <= Node.val <= 100

export default function binaryTreeInorderTraversal(
  root: TreeNode | null
): number[] {
  let traversal = [];
  let stack = [];
  let current = root;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      traversal.push(current.val);
      current = current.right;
    }
  }

  return traversal;
}
