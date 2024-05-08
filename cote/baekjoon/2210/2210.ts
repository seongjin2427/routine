//* 2210. 숫자판 점프
//* ⭕️ 통과
//* 완전 탐색

//* 0 <= digit <= 9

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export default function jumpNumberBoard(input: string) {
  const board = input.split("\n").map((row) => row.split(" ").map((v) => +v));
  const set = new Set();

  const bfs = (startY: number, startX: number) => {
    const queue: [number, number, string][] = [[startY, startX, ""]];

    while (queue.length) {
      const [y, x, n] = queue.shift();

      const next = n + board[y][x];
      if (next.length === 6) {
        set.add(next);
        continue;
      }

      for (const [dy, dx] of directions) {
        const [my, mx] = [y + dy, x + dx];

        if (0 <= my && 0 <= mx && my < 5 && mx < 5) {
          queue.push([my, mx, next]);
        }
      }
    }
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      bfs(i, j);
    }
  }

  return set.size;
}
