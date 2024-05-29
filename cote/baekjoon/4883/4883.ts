//* 4883. 삼각 그래프
//* ❌ 실패
//* DP

//* 2 <= N <= 100_000

export default function tryGraph(input: string) {
  const lines = input.split("\n");
  let index = 0;
  let tc = 0;
  let answer = "";

  while (parseInt(lines[index]) !== 0) {
    tc++;
    let n = parseInt(lines[index]);
    index++;
    let dp = Array.from({ length: n }, () => Array(3).fill(0));

    for (let i = 0; i < n; i++) {
      let tokens = lines[index].split(" ").map(Number);
      dp[i][0] = tokens[0];
      dp[i][1] = tokens[1];
      dp[i][2] = tokens[2];
      index++;
    }

    for (let i = 1; i < n; i++) {
      if (i === 1) {
        for (let j = 0; j < 3; j++) {
          if (j === 0) dp[i][0] += dp[i - 1][1];
          else {
            dp[i][j] += Math.min(
              dp[i][j - 1],
              Math.min(dp[i - 1][1], dp[i - 1][1] + dp[i - 1][2])
            );
          }
        }
      } else {
        dp[i][0] += Math.min(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] += Math.min(
          Math.min(dp[i][0], dp[i - 1][0]),
          Math.min(dp[i - 1][1], dp[i - 1][2])
        );
        dp[i][2] += Math.min(dp[i][1], Math.min(dp[i - 1][1], dp[i - 1][2]));
      }
    }
    answer += `${tc}. ${dp[n - 1][1]}\n`;
  }

  return answer.trim();
}
