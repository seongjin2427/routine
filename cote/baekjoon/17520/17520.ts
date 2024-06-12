//* 17520. Balanced String
//* ⭕️ 통과
//* DP

//* 1 <= n <= 100_000

export default function balancedString(input: string) {
  const N = +input;

  const dp = [0, 2, 2];

  for (let i = 3; i <= N; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i - 1] % 16_769_023;
    } else {
      dp[i] = (dp[i - 1] * 2) % 16_769_023;
    }
  }

  return dp[N];
}

//* 1 -> [1, 0] 2
//* 2 -> [01, 10] 2
//* 3 -> [010, 011, 100, 101] 4
//* 4 -> [0101, 0110, 1001, 1010] 4
//* 5 -> [01011, 01010, 01101, 01100, 10011, 10010, 10101, 10100] 8
