//* 13565. 침투
//*
//* 완전 탐색

//* 2 <= M <= 1_000
//* 2 <= N <= 1_000

const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export default function percolate(input: string) {
  const [rawNM, ...rawGrid] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const grid = rawGrid.map((row) => row.split("").map((v) => +v));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  const startPoins = [];
  for (let i = 0; i < M; i++) {
    if (grid[0][i] === 0) {
      startPoins.push([0, i]);
    }
  }

  const bfs = (...start: number[][]) => {
    const queue = [...start];
    while (queue.length) {
      const [y, x] = queue.shift();

      if (!visited[y][x] && grid[y][x] === 0) {
        visited[y][x] = true;
        grid[y][x] = 2;

        for (const [dy, dx] of DIRECTIONS) {
          const [my, mx] = [dy + y, dx + x];

          if (0 <= my && 0 <= mx && my < N && mx < M && !visited[my][mx]) {
            queue.push([my, mx]);
          }
        }
      }
    }
  };

  bfs(...startPoins);

  const isReachedInnerSide = [...grid.at(-1)].some((target) => target === 2);
  return isReachedInnerSide ? "YES" : "NO";
}
