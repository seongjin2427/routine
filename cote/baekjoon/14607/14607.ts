//* 14607. 피자 (Large)
//* ❌ 실패
//* DP

//* 1 <= N <= 1_000_000_000

export default function largePizza(input: string) {
  const N = +input;

  let dp = new Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[i], dp[j] + dp[i - j] + j * (i - j));
    }
  }

  return dp[N];
}
