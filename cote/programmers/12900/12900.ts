// * 12900. 2 x n 타일링
// * ⭕️ 통과
// * DP

// * n <= 60_000
// * return answer % 1_000_000_007

export default function solution(n: number) {
  const dp = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
  }

  return dp[n - 1];
}
