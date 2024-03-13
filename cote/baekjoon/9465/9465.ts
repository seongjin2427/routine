//* 9465. 스티커
//* ❌ 실패
//* DP

//* 1 <= n <= 100_000

export default function sticker(input: string) {
  const [T, ...cases] = input.split("\n");
  let result = "";

  for (let t = 0, k = 0; t < Number(T); t++) {
    const n = +cases[k++];
    const scores = [
      cases[k++].split(" ").map(Number),
      cases[k++].split(" ").map(Number),
    ];
    const dp = Array.from(Array(2), () => new Array(n).fill(0));

    dp[0][0] = scores[0][0];
    dp[1][0] = scores[1][0];
    dp[0][1] = scores[0][1] + dp[1][0];
    dp[1][1] = scores[1][1] + dp[0][0];

    for (let i = 2; i < n; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + scores[0][i];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + scores[1][i];
    }

    result += Math.max(dp[0][n - 1], dp[1][n - 1]) + "\n";
  }

  return result.trim();
}
