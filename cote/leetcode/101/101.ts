//* 101. Symmetric Tree
//* ❌ 실패
//* 구현

//* -100 <= Node.val <= 100

import { TreeNode } from "../../@common/tree";

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return (
    t1.val === t2.val &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  );
};

export default function isSymmetricTree(root: TreeNode) {
  return isMirror(root, root);
}
