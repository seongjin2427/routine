//* 14940. 쉬운 최단거리
//* ⭕️ 통과
//* BFS

//* 2 <= n <= 1_000
//* 2 <= m <= 1_000

const MOVE = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

export default function easyShortestDistance(input: string) {
  const [rawNM, ...rawBoard] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const BOARD = rawBoard.map((row) => row.split(" ").map((v) => +v));

  let goal = null;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (BOARD[i][j] === 2) {
        goal = [i, j];
        break;
      }
    }
  }

  const queue = [goal];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  BOARD[goal[0]][goal[1]] = 0;

  while (queue.length) {
    const [y, x] = queue.shift();

    if (!visited[y][x]) {
      visited[y][x] = true;

      for (const [dy, dx] of MOVE) {
        const [my, mx] = [y + dy, x + dx];

        if (
          0 <= my &&
          0 <= mx &&
          my < N &&
          mx < M &&
          !visited[my][mx] &&
          BOARD[my][mx] !== 0
        ) {
          BOARD[my][mx] = BOARD[y][x] + 1;
          queue.push([my, mx]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && BOARD[i][j] === 1) {
        BOARD[i][j] = -1;
      }
    }
  }

  return BOARD.map((row) => row.join(" ")).join("\n");
}
