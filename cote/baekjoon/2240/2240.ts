//* 2240. 자두나무
//* ❌ 실패
//* DP

//* 1 <= T <= 1_000
//* 1 <= W <= 30

export default function plumTree(input: string) {
  const [rawTW, ...rawPlums] = input.split("\n");
  const [T, W] = rawTW.split(" ").map(Number);
  const plums = rawPlums.map(Number);

  // dp 배열 초기화: dp[t][w]는 시간 t에서 w번 이동했을 때 받을 수 있는 최대 자두의 개수를 저장
  const dp = Array.from({ length: T + 1 }, () =>
    Array.from({ length: W + 1 }, () => 0)
  );

  // 초기 위치는 1번 나무 아래, 따라서 첫 번째 자두가 1번 나무에서 떨어지면 받을 수 있음
  for (let t = 1; t <= T; t++) {
    for (let w = 0; w <= W; w++) {
      // 자두가 해당 나무 아래 있을 때 자두를 받는 경우
      const isSameTree = plums[t - 1] === (w % 2) + 1;
      dp[t][w] = dp[t - 1][w] + (isSameTree ? 1 : 0);

      // w가 0이 아니면, 움직일 수 있는 경우를 고려하여 이전 시간의 자두 개수를 비교
      if (w > 0) {
        dp[t][w] = Math.max(dp[t][w], dp[t - 1][w - 1] + (isSameTree ? 1 : 0));
      }
    }
  }

  // 최대 자두 개수를 찾기 위해 마지막 시간에서 모든 이동 가능성을 고려
  return Math.max(...dp[T]);
}
