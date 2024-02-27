//* 159993. 미로 탈출
//* ⭕️ 통과
//* 완전탐색

//* 5 <= maps.length <= 100
//* 5 <= maps.length[i] <= 100

export default function escapeMaze(maps: string[]) {
  let time = 0;
  const visitedForLever = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(-1)
  );
  const visitedForEnd = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(-1)
  );
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const startPoint = [];
  const leverPoint = [];
  maps.forEach((row, rowIndex) => {
    const startColumnIndex = row.indexOf("S");
    const leverColumnIndex = row.indexOf("L");
    if (startColumnIndex >= 0) startPoint.push(startColumnIndex, rowIndex);
    if (leverColumnIndex >= 0) leverPoint.push(leverColumnIndex, rowIndex);
  });

  const bfs = (
    x: number,
    y: number,
    count: number,
    visitedMap: number[][],
    endPoint: string
  ) => {
    const queue = [[y, x, count]];

    while (queue.length) {
      const [dy, dx, currentCount] = queue.shift();

      if (
        dx >= 0 &&
        dy >= 0 &&
        dx < maps[0].length &&
        dy < maps.length &&
        maps[dy][dx] !== "X" &&
        visitedMap[dy][dx] < 0
      ) {
        visitedMap[dy][dx] = currentCount + 1;
        if (maps[dy][dx] === endPoint) {
          time += currentCount;
          break;
        }
        for (const [my, mx] of move) {
          queue.push([dy + my, dx + mx, currentCount + 1]);
        }
      }
    }
  };

  bfs(startPoint[0], startPoint[1], 0, visitedForLever, "L");
  if (!time) return -1;

  const flag = time;
  bfs(leverPoint[0], leverPoint[1], 0, visitedForEnd, "E");
  if (flag === time) return -1;
  return time;
}
