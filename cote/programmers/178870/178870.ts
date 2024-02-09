// * 178870. 연속된 부분 수열의 합
// * ❌ 실패
// * 투 포인터

// * 5 <= sequence.length <= 1_000_000
// * 1 <= sequence[i] <= 1_000
// * 5 <= k <= 1_000_000_000

export default function solution(sequence: number[], k: number) {
  let start = 0,
    end = 0;
  let sum = sequence[0];
  let result = [0, sequence.length - 1]; // 최대 길이로 초기화
  let minLength = Infinity;

  while (end < sequence.length) {
    if (sum < k) {
      // 합이 k보다 작으면 end를 증가
      end++;
      sum += sequence[end];
    } else {
      // 합이 k와 같거나 크면 현재 부분 수열의 길이 확인
      if (sum === k && end - start < minLength) {
        minLength = end - start;
        result = [start, end];
      }
      sum -= sequence[start];
      start++;
    }
  }

  return result;
}
