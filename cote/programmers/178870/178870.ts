// * 178870. 연속된 부분 수열의 합
// * ❌ 실패
// * 투 포인터

// * 5 <= sequence.length <= 1_000_000
// * 1 <= sequence[i] <= 1_000
// * 5 <= k <= 1_000_000_000

export default function solution(sequence: number[], k: number) {
  let answer = [0, sequence.length - 1];
  let left = 0,
    right = 0;

  let sum = sequence[left];

  while (right < sequence.length) {
    if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      const distance = answer[1] - answer[0];
      const currentDistance = right - left;

      if (distance > currentDistance) {
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
