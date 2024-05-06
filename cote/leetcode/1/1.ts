//* 1. Two Sum
//* ⭕️ 통과
//* 투포인터, 해시

//* 2 <= nums.length <= 100_000
//* -10^9 <= nums[i] <= 10^9
//* -10^9 <= target <= 10^9

export default function twoSum2(nums: number[], target: number) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const lookup = target - nums[i];
    if (map.has(lookup)) {
      return [i, map.get(lookup)];
    }

    map.set(nums[i], i);
  }
}

function twoSum(nums: number[], target: number) {
  const sorted = nums
    .map((v, index) => ({ value: v, index }))
    .sort((a, b) => a.value - b.value);

  const answer = [];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = sorted[left].value + sorted[right].value;

    if (sum === target) {
      answer.push(sorted[left].index, sorted[right].index);
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
}
