//* 1309. 동물원
//* ❌ 실패
//* DP

//* 1 <= N <= 100_000

export default function zoo(input: number) {
  const dp = [0, 3, 7];

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  return dp[input];
}
