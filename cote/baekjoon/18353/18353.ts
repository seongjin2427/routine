//* 18353. 병사 배치하기
//* ❌ 실패
//* DP

//* 1 <= N <= 2_000
//* soldier <= 10_000_000

export default function arrangeSoldier(input: string) {
  const [rawN, rawSoldiers] = input.split("\n");
  const N = +rawN;
  const soldiers = rawSoldiers
    .split(" ")
    .map((v) => +v)
    .reverse();

  let dp = new Array(N + 1).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (soldiers[i] > soldiers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i <= N; i++) {
    ans = Math.max(ans, dp[i]);
  }

  return N - ans;
}
