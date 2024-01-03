// * 11055 가장 큰 증가하는 부분 수열
// * ❌ 실패
// * DP

// * 1 <= N <= 1_000
// * 1 <= Ai <= 1_000

export default function solution(input: string) {
  const [rawN, rawNumbers] = input.split("\n");
  const N = +rawN;
  const numbers = rawNumbers.split(" ").map((v) => +v);

  const dp = [...numbers];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i] && dp[j] + numbers[i] > dp[i]) {
        dp[i] = dp[j] + numbers[i];
      }
    }
  }

  return Math.max(...dp);
}
