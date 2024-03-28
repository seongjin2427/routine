//* 1106. 호텔
//* ❌ 실패
//* DP

//* C <= 1_000
//* N <= 20

export default function hotel(input: string) {
  const [rawCN, ...rawCosts] = input.split("\n");
  const [C, N] = rawCN.split(" ").map((v) => +v);
  const costs = rawCosts.map((cost) => cost.split(" ").map((v) => +v));

  // 목표 고객 수 C를 달성하기 위해 필요한 최소 비용을 저장할 dp 배열을 초기화합니다.
  const dp = new Array(C + 1).fill(Infinity);
  dp[0] = 0; // 0명의 고객을 늘리는 비용은 0

  for (let [cost, people] of costs) {
    if (dp[people] > cost) dp[people] = cost;
    for (let i = 1; i <= C; i++) {
      dp[i] =
        i < people
          ? Math.min(dp[i], cost)
          : Math.min(dp[i], dp[people] + dp[i - people]);
    }
  }

  return dp[C];
}
