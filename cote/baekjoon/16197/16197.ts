//* 16197. 두 동전
//* ⭕️ 통과
//* 완전탐색

//* 1 <= N, M <= 20

const MOVE = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const isOutOfBoard = (y: number, x: number, N: number, M: number) =>
  y < 0 || x < 0 || N <= y || M <= x;

const isAtWall = (y: number, x: number, board: string[][]) =>
  board[y][x] === "#";

export default function twoCoins(input: string) {
  const [rawNM, ...rawBoard] = input.split("\n");
  const [N, M] = rawNM.split(" ").map(Number);

  const coins: number[] = [];
  const board = rawBoard.map((row, rowIndex) =>
    row.split("").map((target, columnIndex) => {
      if (target === "o") {
        coins.push(rowIndex, columnIndex);
      }
      return target;
    })
  );

  const bfs = (coins: number[], board: string[][]) => {
    const queue = [[...coins, 0]];
    const visited = new Set();

    while (queue.length) {
      const [y1, x1, y2, x2, count] = queue.shift()!;

      const state = `${y1},${x1},${y2},${x2}`;
      if (visited.has(state)) continue;
      visited.add(state);

      if (10 <= count) return -1;

      for (const [dy, dx] of MOVE) {
        const [newY1, newX1] = [y1 + dy, x1 + dx];
        const [newY2, newX2] = [y2 + dy, x2 + dx];

        const out1 = isOutOfBoard(newY1, newX1, N, M);
        const out2 = isOutOfBoard(newY2, newX2, N, M);

        if (out1 && out2) continue; // 두 동전 모두 보드 밖으로 나간 경우
        if (out1 || out2) return count + 1; // 한 동전만 보드 밖으로 나간 경우

        let [nextY1, nextX1] = [newY1, newX1];
        let [nextY2, nextX2] = [newY2, newX2];

        // 벽이라면 이동할 수 없음
        if (isAtWall(newY1, newX1, board)) [nextY1, nextX1] = [y1, x1];
        if (isAtWall(newY2, newX2, board)) [nextY2, nextX2] = [y2, x2];

        queue.push([nextY1, nextX1, nextY2, nextX2, count + 1]);
      }
    }
    return -1; // 동전이 떨어지지 않는 경우
  };

  return bfs(coins, board);
}
