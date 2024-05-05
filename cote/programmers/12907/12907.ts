//* 12907. 거스름돈
//* ❌ 실패
//* DP

//* n <= 100_000
//* return answer % 1_000_000_007

export default function changes(n: number, money: number[]) {
  const MOD = 1_000_000_007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 0원을 만드는 방법은 아무 동전도 사용하지 않는 것 1가지

  for (let coin of money) {
    for (let amount = coin; amount <= n; amount++) {
      dp[amount] = (dp[amount] + dp[amount - coin]) % MOD;
    }
  }

  return dp[n];
}
