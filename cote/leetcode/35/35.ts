//* 35. Search Insert Position
//* ❌ 실패
//* 이분 탐색

//* 1 <= nums.length <= 10_000
//* -10_000 <= nums[i], target <= 10_000

export default function searchInsertPosition(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found at index mid.
    } else if (nums[mid] < target) {
      left = mid + 1; // Adjust the left boundary.
    } else {
      right = mid - 1; // Adjust the right boundary.
    }
  }

  return left;
}

function searchInsertPosition1(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  if (target <= nums[0]) return 0;
  if (nums.at(-1) < target) return nums.length;

  while (left < right) {
    const scope = nums.slice(left, right + 1);
    let mid = Math.floor((right - left) / 2);

    if (scope[mid] === target) {
      return mid;
    } else if (scope[mid] < target) {
      if (target <= scope[mid + 1]) {
        return mid + 1;
      }
      left = mid + 1;
    } else if (target < scope[mid]) {
      if (scope[mid - 1] <= target) {
        return mid;
      }
      right = mid - 1;
    }
  }
}
