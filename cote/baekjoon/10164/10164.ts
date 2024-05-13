//* 10164. 격자상의 경로
//* ❌ 실패
//* DP

//* 1 <= N, M <= 15

export default function routeOnGrid(input: string) {
  const [N, M, K] = input.split(" ").map(Number);
  if (N * M === 1) return 1; // 격자가 1x1인 경우

  // 좌표 계산
  let targetRow = Math.floor((K - 1) / M);
  let targetCol = (K - 1) % M;

  // 동적 계획법을 사용하여 경로의 수 계산
  function countPaths(n: number, m: number) {
    const dp = Array.from({ length: n }, () => new Array(m).fill(0));
    dp[0][0] = 1; // 시작점

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i === 0 && j === 0) continue;
        const fromTop = i > 0 ? dp[i - 1][j] : 0;
        const fromLeft = j > 0 ? dp[i][j - 1] : 0;
        dp[i][j] = fromTop + fromLeft;
      }
    }

    return dp[n - 1][m - 1];
  }

  if (K === 0) {
    // K가 0일 때는 직접 계산
    return countPaths(N, M);
  } else {
    // K를 경유하는 두 부분으로 나누어 계산
    const toK = countPaths(targetRow + 1, targetCol + 1);
    const fromK = countPaths(N - targetRow, M - targetCol);
    return toK * fromK;
  }
}
