//* 17212. 달나라 토끼를 위한 구매대금 지불 도우미
//* ❌ 실패
//* DP

//* 0 <= N <= 100_000

export default function payHelper(input: string) {
  const N = +input;

  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 2;
  dp[5] = 1;
  dp[6] = 2;
  dp[7] = 1;

  for (let i = 8; i <= N; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2], dp[i - 5], dp[i - 7]) + 1;
  }

  return dp[N];
}
