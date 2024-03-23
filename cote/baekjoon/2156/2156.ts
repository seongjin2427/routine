//* 2156. 포도주 시식
//* ❌ 실패
//* DP

//* 1 <= n <= 10_000

export default function tasteWine(input: string) {
  const [rawN, ...rawAmounts] = input.split("\n");
  const N = +rawN;
  const amounts = rawAmounts.map(Number);

  const dp = new Array(N).fill(0);

  dp[1] = amounts[0];
  dp[2] = amounts[0] + amounts[1];

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + amounts[i - 1],
      dp[i - 3] + amounts[i - 1] + amounts[i - 2]
    );
  }

  return dp[N];
}
