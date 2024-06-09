//* 11057. 오르막 수
//* ❌ 실패
//* DP

//* 1 <= N <= 1_000

export default function inclineNumber(input: string) {
  const DP = [[], new Array(10).fill(1)];

  for (let i = 2; i <= Number(input); i++) {
    DP[i] = [];
    DP[i][0] = DP[i - 1][0] % 10_007;

    for (let j = 1; j < 10; j++) {
      DP[i][j] = (DP[i][j - 1] + DP[i - 1][j]) % 10_007;
    }
  }

  return DP[Number(input)].reduce((acc, cur) => acc + cur, 0) % 10_007;
}
