//* 27. Remove Element
//* ⭕️ 성공
//* 구현

//* 0 <= nums.length <= 100
//* 0 <= nums[i] <= 50
//* 0 <= val <= 100

export default function removeElement(nums: number[], val: number): number {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      answer++;
    } else {
      delete nums[i];
    }
  }

  nums.sort();

  return answer;
}
