//* 2293. 동전 1
//* ❌ 실패
//* DP

//* 1 <= n <= 100
//* 1 <= k <= 10_000

export default function coin1(input: string) {
  const [rawNK, ...rawCoins] = input.split("\n");
  const [N, K] = rawNK.split(" ").map(Number);
  const coins = rawCoins.map(Number);

  let dp = Array(K + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j <= K; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[K];
}
