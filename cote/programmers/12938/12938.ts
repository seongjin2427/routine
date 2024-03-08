//* 12938. 최고의 집합
//* ❌ 실패
//* 구현

//* 1 <= n <= 10_000
//* 1 <= 1 <= 100_000_000

export default function bestSet(n: number, s: number) {
  if (n > s) {
    // 자연수 n개로 합이 s가 되는 집합을 만들 수 없는 경우
    return [-1];
  }

  let result = new Array(n).fill(Math.floor(s / n)); // 최대한 균등하게 분배
  let remainder = s % n; // 나누어 떨어지지 않는 나머지 처리

  // 나머지가 있을 경우, 그 나머지만큼의 원소에 1씩 추가하여 합이 s가 되도록 조정
  for (let i = 0; i < remainder; i++) {
    result[n - 1 - i]++; // 뒤에서부터 1씩 더해 균등 분배
  }

  return result; // 최고의 집합 반환
}
