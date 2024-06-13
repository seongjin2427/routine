//* 19947. 투자의 귀재 배주형
//* ❌ 실패
//* 브루트포스, DP

//* 10_000 <= H <= 100_000
//* 0 <= Y <= 10

export default function geniusOfInvestment(input: string) {
  const [H, Y] = input.split(" ").map((v) => +v);

  const dp = new Array(Y + 1).fill(0);
  dp[0] = H;

  for (let i = 1; i <= Y; i++) {
    dp[i] = Math.floor(dp[i - 1] * 1.05);

    if (i >= 3) {
      dp[i] = Math.max(dp[i], Math.floor(dp[i - 3] * 1.2));
    }

    if (i >= 5) {
      dp[i] = Math.max(dp[i], Math.floor(dp[i - 5] * 1.35));
    }
  }

  return dp[Y];
}
