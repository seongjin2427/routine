//* 42898. 등굣길
//* ❌ 실패
//* DP

//* 1 <= m, n <= 100

export default function wayToSchool(m: number, n: number, puddles: number[][]) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  dp[1][1] = 1;

  // 물웅덩이 위치 표시를 위한 맵 초기화
  const puddlesMap = new Map(puddles.map(([x, y]) => [`${x},${y}`, true]));

  for (let x = 1; x <= m; x++) {
    for (let y = 1; y <= n; y++) {
      if (puddlesMap.has(`${x},${y}`) || (x === 1 && y === 1)) {
        continue;
      }
      let left = x > 1 ? dp[x - 1][y] : 0;
      let up = y > 1 ? dp[x][y - 1] : 0;
      dp[x][y] = (left + up) % 1000000007;
    }
  }

  return dp[m][n];
}
