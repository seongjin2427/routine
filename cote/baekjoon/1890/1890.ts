//* 1890. 점프
//* ❌ 실패
//* DP

//* 4 <= N <= 100
//* 경로의 개수는 2^63 - 1보다 작음

export default function jump(input: string) {
  const [rawN, ...rawBoard] = input.split("\n");
  const N = +rawN;
  const BOARD = rawBoard.map((b) => b.split(" ").map((v) => +v));

  const DP = Array.from({ length: N }, () => new Array(N).fill(BigInt(0)));
  DP[0][0] = BigInt(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const distance = BOARD[i][j];
      if (distance === 0) continue;
      if (i + distance < N) {
        DP[i + distance][j] += DP[i][j];
      }
      if (j + distance < N) {
        DP[i][j + distance] += DP[i][j];
      }
    }
  }

  return DP[N - 1][N - 1].toString();
}
