//* 111. Minimum Depth of Binary Tree
//*
//* 구현

//* -1_000 <= Node.val <= 1_000
//* 0 <= range <= 100_000

import { TreeNode } from "../../@common/tree";

export default function minimumDepthOfBinaryTree(root: TreeNode | null) {
  if (!root) return 0;
  if (root.left === null) {
    return 1 + minimumDepthOfBinaryTree(root.right);
  }
  if (root.right === null) {
    return 1 + minimumDepthOfBinaryTree(root.left);
  }
  return (
    1 +
    Math.min(
      minimumDepthOfBinaryTree(root.right),
      minimumDepthOfBinaryTree(root.left)
    )
  );
}
