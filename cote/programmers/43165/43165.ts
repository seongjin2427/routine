// * 43165. 타겟 넘버
// * ❌ 실패
// * DFS/BFS

// * 2 <= numbers.length <= 20
// * 1 <= numbers[i] <= 50
// * 1 <= target <= 1_000

export default function solution(numbers: number[], target: number) {
  let result = [];

  function recursion(sum, index) {
    if (index >= numbers.length - 1) return result.push(sum);

    index++;
    recursion(sum + numbers[index], index);
    recursion(sum - numbers[index], index);
  }

  recursion(numbers[0], 0);
  recursion(-numbers[0], 0);
  return result.filter((el) => el === target).length;
}
