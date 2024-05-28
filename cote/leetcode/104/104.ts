//* 104. Maximum Depth of Binary Tree
//* ⭕️ 통과
//* 재귀

//* -100 <= Node.val <= 100
//* 0 <= Node range <= 100_000

import { TreeNode } from "../@common/tree";

function checkDepth(treeNode: TreeNode, depth: number): number {
  if (treeNode === null || treeNode.val === null) return depth;

  return Math.max(
    checkDepth(treeNode.left, depth + 1),
    checkDepth(treeNode.right, depth + 1)
  );
}

export default function maximumDepthOfBinaryTree(root: TreeNode) {
  if (!root) return 0;
  return Math.max(checkDepth(root.left, 1), checkDepth(root.right, 1));
}
