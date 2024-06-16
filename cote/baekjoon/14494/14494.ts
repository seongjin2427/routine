//* 14494. 다이나믹이 뭐에요?
//* ⭕️ 통과
//* DP

//* 1 <= n, m <= 1_000

export default function whatIsDynamic(input: string) {
  const [N, M] = input.split(" ").map((v) => +v);

  const dp: number[][] = Array.from({ length: N }, (_, i) =>
    Array.from({ length: M }, (_, j) => 1)
  );

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      dp[i][j] =
        (dp[i - 1][j] + dp[i][j - 1] + dp[i - 1][j - 1]) % 1_000_000_007;
    }
  }

  return dp[N - 1][M - 1];
}
