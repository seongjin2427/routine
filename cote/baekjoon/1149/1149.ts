//* 1149. RGB거리
//* ❌ 실패
//* DP

//* 2 <= N <= 1_000

export default function RGBStreet(input: string) {
  const [rawN, ...rawCosts] = input.split("\n");
  const N = +rawN;
  const costs = rawCosts.map((c) => c.split(" ").map(Number));

  let dp = Array.from({ length: N }, () => Array(3).fill(0));

  // 첫 번째 집을 칠하는 비용을 초기값으로 설정
  dp[0] = [...costs[0]];

  // 2번 집부터 N번 집까지 최소 비용을 계산
  for (let i = 1; i < N; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // 현재 집을 빨강으로 칠하는 비용
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // 현재 집을 초록으로 칠하는 비용
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // 현재 집을 파랑으로 칠하는 비용
  }

  // N번 집까지 칠하는 비용 중 최소값을 반환
  return Math.min(...dp[N - 1]);
}
