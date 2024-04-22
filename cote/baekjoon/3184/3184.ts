//* 3184. 양
//*
//* 완전탐색

//* 3 <= R, C <= 250

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

export default function sheep(input: string) {
  const [rawRC, ...rawGarden] = input.split("\n");
  const [R, C] = rawRC.split(" ").map((v) => +v);
  const garden = rawGarden.map((g) => g.split(""));

  //* . (필드), # (울타리), o (양), v (늑대)
  const count = { o: 0, v: 0 };
  const visited = Array.from({ length: R }, () => new Array(C).fill(false));

  const bfs = (startY: number, startX: number) => {
    const queue = [[startY, startX]];
    let sheepCount = 0;
    let wolfCount = 0;

    while (queue.length) {
      const [y, x] = queue.shift();
      const target = garden[y][x];

      if (!visited[y][x] && target !== "#") {
        visited[y][x] = true;
        if (target === "o") sheepCount++;
        if (target === "v") wolfCount++;

        for (const [dy, dx] of directions) {
          const [my, mx] = [y + dy, x + dx];

          if (
            0 <= my &&
            0 <= mx &&
            my < R &&
            mx < C &&
            !visited[my][mx] &&
            garden[my][mx] !== "#"
          ) {
            queue.push([my, mx]);
          }
        }
      }
    }

    if (sheepCount > wolfCount) count.o += sheepCount;
    else count.v += wolfCount;
  };

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j] && garden[i][j] !== "#" && garden[i][j] !== ".") {
        bfs(i, j);
      }
    }
  }

  return `${count.o} ${count.v}`;
}
