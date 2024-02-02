// * 1965. 상자넣기
// * ❌ 실패
// * DP

// * 1 <= n <= 1_000
// * n[i] <= 1_000

export default function solution(input: string) {
  const [rawN, rawBoxes] = input.split("\n");
  const N = +rawN;
  const boxes = rawBoxes.split(" ").map((v) => +v);

  const dp = new Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[j] < boxes[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
