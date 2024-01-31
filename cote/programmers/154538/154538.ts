// * 154538. 숫자 변환하기
// * ❌ 실패
// * 그리디

// * 1 <= x <= y <= 1_000_000
// * 1 <= n < y

export default function solution(x: number, y: number, n: number) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let dataSet = [x];
  while (dataSet.length) {
    const newData = [];
    for (const data of dataSet) {
      for (const value of [data + n, data * 2, data * 3]) {
        if (value > y || dp[value]) continue;
        if (value === y) return dp[data] + 1;
        dp[value] = dp[data] + 1;
        newData.push(value);
      }
    }
    dataSet = newData;
  }
  return -1;
}
