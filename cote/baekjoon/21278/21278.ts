//* 21278. 호석이 두 마리 치킨
//* ❌ 실패
//* 브루트포스

//* 2 <= N <= 100
//* N - 1 <= M <= N * (N - 1) / 2
//* 1 <= A[i], B[i] <= (A[i] !== B[i])

export default function hoseokTwoChicken(input: string) {
  const [rawNM, ...rawRoads] = input.split("\n");
  const [N, M] = rawNM.split(" ").map(Number);
  const roads = rawRoads.map((n) => n.split(" ").map(Number));

  const floyd = Array.from({ length: N }, () => Array(N).fill(101));

  roads.forEach(([a, b]) => {
    floyd[a - 1][b - 1] = 1;
    floyd[b - 1][a - 1] = 1;
  });

  for (let i = 0; i < N; i++) {
    floyd[i][i] = 0;
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        floyd[i][j] = Math.min(floyd[i][j], floyd[i][k] + floyd[k][j]);
      }
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  let bestStores = [];

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let total = 0;
      for (let k = 0; k < N; k++) {
        total += Math.min(floyd[k][i], floyd[k][j]);
      }
      if (total < min) {
        min = total;
        bestStores = [i + 1, j + 1];
      }
    }
  }

  return [...bestStores, min * 2].join(" ");
}
