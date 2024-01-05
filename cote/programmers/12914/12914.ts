// * 12914. 멀리 뛰기
// * ⭕️ 통과
// * DP

export default function solution(n: number) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n];
}
