// * 1059. 좋은 구간
// * ❌ 실패
// * 정렬, 브루트포스

// * A < B
// * 1 <= L <= 50

export default function solution(input: string) {
  const [rawL, rawNumbers, rawN] = input.split("\n");
  const L = +rawL;
  const numbers = rawNumbers
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const n = +rawN;

  // n이 S에 포함되어 있는지 확인
  if (numbers.includes(n)) {
    return 0;
  }

  let start = 1; // 가능한 최소 시작점
  let end = 1000; // 가능한 최대 종료점

  // n보다 작거나 같은 S의 최대 원소 찾기
  for (let i of numbers) {
    if (i < n) {
      start = i + 1;
    } else {
      break;
    }
  }

  // n보다 큰 S의 최소 원소 찾기
  for (let i of numbers) {
    if (i > n) {
      end = i - 1;
      break;
    }
  }

  // 좋은 구간 계산: (n - start + 1) * (end - n + 1) - 1
  const totalIntervals = (n - start + 1) * (end - n + 1) - 1;

  return totalIntervals;
}
