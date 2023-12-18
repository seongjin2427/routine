// ! 시간 초과
// ❌
// * 11727. 2xn 타일링 2
// * DP

// * 1 <= n <= 1_000
// * 2xn 크기의 직사각형을 채우는 방법의 수 % 10_007을 반환
// * 나올 수 있는 경우의 수: (n - 1) * 3 - (3 * n - 1) + (Math.floor(n / 2) * 3) - (Math.floor(n / 2) * 3 - 1)

export default function solution(input: string) {
  const n = +input;

  if (n <= 1) return 1;

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }

  return dp[n].toString();
}
