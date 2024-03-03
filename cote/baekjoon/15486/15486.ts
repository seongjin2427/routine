//* 15486. 퇴사 2
//* ❌ 실패
//* DP

//* 1 <= N <= 1_500_000
//* 1 <= T[i] <= 50
//* 1 <= P[i] <= 1_000

//* 총 상담 개수가 1_500_000개라서 단순 이중 반복문 사용 불가능

export default function resignation2(input: string) {
  const [rawN, ...rawCouncels] = input.split("\n");
  const N = Number(rawN);
  const councels = rawCouncels.map((councel) => councel.split(" ").map(Number));
  const dp = new Array(N + 1).fill(0);
  let max = 0;

  for (let i = 0; i < N; i++) {
    max = Math.max(max, dp[i]);

    const [day, pay] = councels[i];
    if (i + day <= N) {
      dp[i + day] = Math.max(dp[i + day], max + pay);
    }
  }

  return Math.max(...dp);
}
