// * 87390. n^2 배열 자르기
// * ⭕️ 통과
// * 구현

// * 1 <= n <= 10^7
// * 0 <= left <= right <= n^2
// * right - left < 10^5

// * n^n을 그대로 구현하면 시간 초과 발생

export default function solution(n: number, left: number, right: number) {
  const answer = [];

  for (let i = left; i < n ** 2; i++) {
    const j = Math.floor(i / n);
    const k = i % n;
    answer.push(k <= j ? j + 1 : k + 1);
    if (right <= i) break;
  }

  return answer.slice(0, right + 1);
}
