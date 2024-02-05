// * 1166. 선물
// * ❌ 실패
// * 이분 탐색

// * 1 <= N <= 1_000_000_000
// * 1 <= L, W, H <= 1_000_000_000

export default function solution(input: string) {
  const [N, L, W, H] = input.split(" ").map(Number);

  let left = 0;
  let right = Math.min(L, W, H);
  let mid;

  while (left < right) {
    mid = (left + right) / 2;

    if (Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid) < N) {
      if (right === mid) break;
      right = mid;
    } else {
      if (left === mid) break;
      left = mid;
    }
  }

  return left;
}
