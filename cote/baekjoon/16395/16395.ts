//* 16395. 파스칼의 삼각형
//* ⭕️ 통과
//* DP

//* 1 <= k <= n <= 30

export default function pascalsTriangle(input: string) {
  const [N, K] = input.split(" ").map((v) => +v);
  const triangle = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 1)
  );

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle[N - 1][K - 1];
}
