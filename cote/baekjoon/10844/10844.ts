//* 10844. 쉬운 계단수
//* ❌ 실패
//* DP

//* 1 <= N <= 100
//* return answer % 1_000_000_000

export default function easyStairsCount(input: string) {
  const N = Number(input);
  const dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0));
  const MOD = Number(1e9);
  dp[1][0] = 0;

  for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      dp[i][j] = 0;
      if (j > 0) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= MOD;
    }
  }

  let result = 0;
  for (let i = 0; i <= 9; i++) {
    result += dp[N][i];
    result %= MOD;
  }

  return result;
}
