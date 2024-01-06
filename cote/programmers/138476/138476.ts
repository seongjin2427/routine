// * 138476. 귤 고르기
// * ❌ 실패
// * 정렬

// * 1 <= k <= tangering.length <= 100_000
// * 1 <= tangering[i] <= 10_000_000

// * k개의 귤을 고를 때, 서로 다른 크기의 수를 최소화한 수를 반환

export default function solution(k: number, tangerine: number[]) {
  const arr = [];
  tangerine.forEach((t) => (arr[t] ? arr[t]++ : (arr[t] = 1)));
  arr.sort((a, b) => b - a);

  return arr.filter((t) => {
    if (k <= 0) return;
    k -= t;
    return k || 1;
  }).length;
}
