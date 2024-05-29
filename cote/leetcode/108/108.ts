//* 108. Convert Sorted Array to Binary Search Tree
//* ❌ 실패
//* 이진트리

//* 1 <= nums.length <= 100_000
//* -100_000 <= nums[i] <= 100_000

import { TreeNode } from "../@common/tree";

export default function convertSortedArrayToBinarySearchTree(nums: number[]) {
  if (nums.length === 0) return null;

  const centerIndex = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[centerIndex],
    convertSortedArrayToBinarySearchTree(nums.slice(0, centerIndex)),
    convertSortedArrayToBinarySearchTree(nums.slice(centerIndex + 1))
  );
}
