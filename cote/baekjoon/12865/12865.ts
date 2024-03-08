//* 12865. 평범한 배낭
//* ❌ 실패
//* DP

//* 1 <= N <= 100
//* 1 <= K <= 100_000
//* 1 <= W <= 100_000
//* 0 <= V <= 1_000

export default function ordinaryBackpack(input: string) {
  const [rawNK, ...rawThings] = input.split("\n");
  const [N, K] = rawNK.split(" ").map(Number);
  const things = rawThings.map((thing) => thing.split(" ").map(Number));

  const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const [currentWeight, currentValue] = things[i - 1];
    
    for (let j = 1; j <= K; j++) {
      if (currentWeight > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - currentWeight] + currentValue
        );
      }
    }
  }

  return dp[N][K];
}
