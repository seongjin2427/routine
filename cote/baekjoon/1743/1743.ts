//* 1743. 음식물 피하기
//* ❌ 실패
//* 완전탐색

//* 1 <= N <= 100
//* 1 <= M <= 100
//* 1 <= K <= N x M

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export default function avoidFood(input: string) {
  const [rawNMK, ...rawFoods] = input.split("\n");
  const [N, M, K] = rawNMK.split(" ").map((v) => +v);
  const foods = rawFoods.map((f) => f.split(" ").map((v) => +v));

  const board = Array.from({ length: N }, () => new Array(M).fill(false));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let answer = 0;

  for (const [fy, fx] of foods) {
    board[fy - 1][fx - 1] = true;
  }

  const bfs = (y: number, x: number) => {
    const queue = [[y, x]];
    visited[y][x] = true;
    let count = 1;

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      board[currentY][currentX] = false;

      for (const [dy, dx] of directions) {
        const [nextY, nextX] = [currentY + dy, currentX + dx];

        if (
          0 <= nextY &&
          0 <= nextX &&
          nextY < N &&
          nextX < M &&
          !visited[nextY][nextX] &&
          board[nextY][nextX]
        ) {
          queue.push([nextY, nextX]);
          visited[nextY][nextX] = true;
          count += 1;
        }
      }
    }

    answer = answer < count ? count : answer;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && board[i][j]) {
        bfs(i, j);
      }
    }
  }

  return answer;
}
