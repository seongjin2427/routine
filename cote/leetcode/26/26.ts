//* 26. Remove Duplicates from Sorted Array
//* ⭕️ 통과
//* 구현

//* 1 <= nums.length <= 3 * 100_000
//* -100 <= nums[i] <= 100

export default function removeDuplicatesfromSortedArray3(nums: number[]) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

function removeDuplicatesfromSortedArray2(nums: number[]) {
  const unique = [...new Set(nums)];

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return unique.length;
}

function removeDuplicatesfromSortedArray1(nums: number[]) {
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
