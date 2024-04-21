//* 1303. 전쟁 - 전투
//* ⭕️ 통과
//* 완전 탐색

//* 1 <= N, M <= 1_000

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export default function warFight(input: string) {
  const [rawNM, ...rawSoldiers] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const soldiers = rawSoldiers.map((soldier) => soldier.split(""));

  const answer = { W: 0, B: 0 };
  const visited = Array.from({ length: M }, () => new Array(N).fill(false));

  const bfs = (startY: number, startX: number, soldier: string) => {
    const queue = [[startY, startX]];
    let soldierCount = 1;

    while (queue.length) {
      const [y, x] = queue.shift();
      visited[y][x] = true;

      for (const [dy, dx] of directions) {
        const [my, mx] = [dy + y, dx + x];
        if (
          0 <= my &&
          0 <= mx &&
          my < M &&
          mx < N &&
          !visited[my][mx] &&
          soldiers[my][mx] === soldier
        ) {
          visited[my][mx] = true;
          queue.push([my, mx]);
          soldierCount++;
        }
      }
    }

    answer[soldier] += soldierCount ** 2;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, soldiers[i][j]);
      }
    }
  }

  return `${answer.W} ${answer.B}`;
}
