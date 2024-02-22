//* 154540. 무인도 여행
//* ⭕️ 통과
//* 완전탐색

//* 3 <= maps.length <= 100
//* 3 <= maps[i].length <= 100

export default function travelDesertIsland(maps: string[]) {
  let sum = 0;
  const result = [];
  const mapArr = maps.map((map) => map.split(""));
  const axis = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(x: number, y: number) {
    if (0 <= y && y < mapArr.length && 0 <= x && x < mapArr[0].length) {
      const target = mapArr[y][x];
      if (target !== "X") {
        mapArr[y][x] = "X";
        sum += +target;

        for (const [dx, dy] of axis) dfs(x + dx, y + dy);
      }
    }
  }

  for (let i = 0; i < mapArr.length; i++) {
    for (let j = 0; j < mapArr[0].length; j++) {
      if (mapArr[i][j] !== "X") {
        sum = 0;
        dfs(j, i);
        result.push(sum);
      }
    }
  }

  return result.length ? result.sort((prev, cur) => prev - cur) : [-1];
}
