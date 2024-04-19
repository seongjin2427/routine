//* 16194. 카드 구매하기 2
//* ❌ 실패
//* DP

//* 1 <= N <= 1_000
//* 1 <= Pi <= 10_000

export default function buyCards2(input: string) {
  const [rawN, rawPrices] = input.split("\n");
  const N = +rawN;
  const prices = rawPrices.split(" ").map((v) => +v);

  let dp = new Array(N + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      if (i - j >= 0) {
        dp[i] = Math.min(dp[i], dp[i - j] + prices[j - 1]);
      }
    }
  }

  return dp[N];
}
