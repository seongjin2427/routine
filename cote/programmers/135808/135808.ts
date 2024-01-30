// * 135808. 과일 장수
// * ⭕️ 통과
// *

// * 3 <= k <= 9
// * 3 <= m <= 10
// * 7 <= score.length <= 1_000_000

export default function solution(k: number, m: number, score: number[]) {
  let sum = 0;
  const sorted = score.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i += m) {
    if (sorted.length < i + m) continue;
    sum += sorted[i + m - 1] * m;
  }
  return sum;
}
