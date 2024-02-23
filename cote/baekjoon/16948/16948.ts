//* 16948. 데스 나이트
//* ⭕️ 통과
//* 완전탐색

//* 5 <= N <= 200

const MOVE_CASES = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];

const createBoard = (N: number) =>
  Array.from({ length: N }, () => new Array(N).fill(0));

const isInOfBoard = (r: number, c: number, limit: number) =>
  0 <= r && 0 <= c && r < limit && c < limit;

const move = (r1: number, c1: number, count: number, board: number[][]) => {
  const cases = [];
  const limit = board.length;

  for (const [moveR, moveC] of MOVE_CASES) {
    const nextR = r1 + moveR;
    const nextC = c1 + moveC;

    if (isInOfBoard(nextR, nextC, limit)) {
      const next = board[nextR][nextC];

      if (!next) {
        cases.push([nextR, nextC, count + 1]);
      }
    }
  }

  return cases;
};

const bfs = (N: number, r1: number, c1: number, r2: number, c2: number) => {
  const board = createBoard(N);
  const queue = [[r1, c1, 0]];

  while (queue.length) {
    const [currentR1, currentC1, currentCount] = queue.shift();

    const movedCases = move(currentR1, currentC1, currentCount, board);
    queue.push(...movedCases);

    if (!board[currentR1][currentC1]) {
      board[currentR1][currentC1] = currentCount;
    }
  }

  return board[r2][c2] || -1;
};

export default function deathknight(input: string) {
  const [rawN, rawMovePoints] = input.split("\n");
  const N = Number(rawN);
  const [r1, c1, r2, c2] = rawMovePoints.split(" ").map(Number);

  const result = bfs(N, r1, c1, r2, c2);

  return result;
}
