//* 43105. 정수 삼각형
//* ⭕️ 통과
//* DP

//* 1 <= triangle.length <= 500
//* 0 <= triangle[i] <= 9_999

export default function integerTriangle(triangle: number[][]) {
  const length = triangle.length;
  const dp = Array.from({ length }, () => new Array(length).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0 || j === triangle[0].length - 1) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j - 1] + triangle[i][j],
          dp[i - 1][j] + triangle[i][j]
        );
      }
    }
  }

  return Math.max(...dp[length - 1]);
}
