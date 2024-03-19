//* 1495. 기타리스트
//* ❌ 실패
//* DP

//* 1 <= N <= 50
//* 1 <= M <= 1_000

export default function guitarlist(input: string) {
  const [rawNSM, rawV] = input.split("\n");
  const [N, S, M] = rawNSM.split(" ").map(Number);
  const V = rawV.split(" ").map(Number);

  let DP = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  DP[0][S] = true; // 시작 볼륨 설정

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= M; j++) {
      if (DP[i][j]) {
        if (j + V[i] <= M) DP[i + 1][j + V[i]] = true;
        if (j - V[i] >= 0) DP[i + 1][j - V[i]] = true;
      }
    }
  }

  // 마지막 곡에서 가능한 최대 볼륨 찾기
  for (let vol = M; vol >= 0; vol--) {
    if (DP[N][vol]) return vol;
  }
  return -1; // 연주할 수 없는 경우
}
