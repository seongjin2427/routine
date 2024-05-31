//* 100. Same Tree
//* ❌ 실패
//* 구현

//* -100_000 <= Node.val <= 100_000

import { TreeNode } from "../../@common/tree";

export default function sameTree(p: TreeNode, q: TreeNode) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return sameTree(p.right, q.right) && sameTree(p.left, q.left);
}
