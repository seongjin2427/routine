// * 1844. 게임 맵 최단거리
// * ❌ 실패
// * DFS/BFS

// * 1 <= n, m <= 100
// * maps[i] = 1 or 0
// * 캐릭터 [0, 0] -> 상대방 진영 [n, m]

export default function solution(maps: number[][]) {
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const row = maps.length;
  const col = maps[0].length;

  const visitCount = [...maps].map((r) => r.map((c) => 1));

  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
          visitCount[ny][nx] = visitCount[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
}
