// * 43165. 타겟 넘버
// * ❌ 실패
// * DFS/BFS

// * 2 <= numbers.length <= 20
// * 1 <= numbers[i] <= 50
// * 1 <= target <= 1_000

export default function solution(numbers: number[], target: number) {
  let answer = 0;

  function recursion(sum, index) {
    if (index >= numbers.length - 1) {
      if (sum === target) answer++;
      return;
    }

    index++;
    recursion(sum + numbers[index], index);
    recursion(sum - numbers[index], index);
  }

  recursion(numbers[0], 0);
  recursion(-numbers[0], 0);

  return answer;
}
