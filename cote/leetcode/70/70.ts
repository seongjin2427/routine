//* 70. Climbing Stairs
//* ⭕️ 성공
//* DP

//* 1 <= n <= 45

export default function climbingStairs(n: number) {
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
}
