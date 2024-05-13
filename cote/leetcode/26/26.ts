//* 26. Remove Duplicates from Sorted Array
//* ⭕️ 통과
//* 구현

//* 1 <= nums.length <= 3 * 100_000
//* -100 <= nums[i] <= 100

export default function removeDuplicatesfromSortedArray(nums: number[]) {
  const arr = Array.from({ length: nums.length + 1 }, () => false);

  let index = 0;
  for (const target of nums) {
    if (!arr[target]) {
      arr[target] = true;
      nums[index] = target;
      index++;
    }
  }

  return index;
}
