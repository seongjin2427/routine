//* 14716. 현수막
//*
//* BFS

//* 1 <= M, N <= 250

const directions = {
  up: [1, 0],
  right: [0, 1],
  down: [-1, 0],
  left: [0, -1],
  rightUp: [1, 1],
  rightDown: [-1, 1],
  leftDown: [-1, -1],
  leftUp: [1, -1],
};

export default function banner(input: string) {
  const [rawNM, ...rawBanner] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const banner = rawBanner.map((row) => row.split(" ").map((v) => +v));
  const moveDirection = Object.values(directions);

  let answer = 0;
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  const bfs = (startY: number, startX: number) => {
    const queue = [[startY, startX]];
    answer++;

    while (queue.length) {
      const [y, x] = queue.shift();

      for (const [dy, dx] of moveDirection) {
        const [my, mx] = [y + dy, x + dx];

        if (
          0 <= my &&
          0 <= mx &&
          my < N &&
          mx < M &&
          !visited[my][mx] &&
          banner[my][mx] !== 0
        ) {
          visited[my][mx] = true;
          queue.push([my, mx]);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && banner[i][j] !== 0) {
        visited[i][j] = true;
        bfs(i, j);
      }
    }
  }

  return answer;
}
