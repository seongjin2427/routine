//* 110. Balanced Binary Tree
//* ❌ 실패
//* 구현

//* -10_000 <= Node.val <= 10_000

import { TreeNode } from "../../@common/tree";

export default function balancedBinaryTree(root: TreeNode | null) {
  let answer = { isBalanced: true };
  getDepth(root, answer);
  return answer.isBalanced;
}

function getDepth(root: TreeNode | null, answer: any): number {
  if (!root) {
    return 0;
  }
  const leftDepth = getDepth(root.left, answer);
  const rightDepth = getDepth(root.right, answer);

  if (Math.abs(leftDepth - rightDepth) > 1) {
    answer.isBalanced = false;
  }
  return Math.max(leftDepth + 1, rightDepth + 1);
}
