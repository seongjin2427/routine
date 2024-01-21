// * 15988. 1, 2, 3 더하기 3
// * ❌ 실패
// * DP

// * n <= 1_000_000
// * result % 1_000_000_009

export default function solution(input: string) {
  const [T, ...numbers] = input.split("\n").map((v) => +v);
  const dp = new Array(1_000_000).fill(0);
  let answer = "";

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < dp.length; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1_000_000_009;
  }

  numbers.forEach((n) => (answer += dp[n] + "\n"));

  return answer.trim();
}
