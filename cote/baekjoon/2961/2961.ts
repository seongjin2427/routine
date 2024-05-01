//* 2961. 도영이가 만든 맛있는 음식
//* ❌ 실패
//* 브루트포스, 백트래킹

//* 1 <= N <= 10

export default function doyoungFood(input: string) {
  const [rawN, ...rawFlavors] = input.split("\n");
  const N = +rawN;
  const flavors = rawFlavors.map((f) => f.split(" ").map((v) => +v));

  let minGap = Infinity;

  // 모든 부분집합에 대해 신맛과 쓴맛의 차이를 계산
  for (let i = 1; i < 1 << N; i++) {
    // 비트마스킹을 이용하여 모든 부분집합 순회
    let sour = 1;
    let bitter = 0;

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        // j번째 비트가 켜져 있다면, j번째 재료 포함
        sour *= flavors[j][0];
        bitter += flavors[j][1];
      }
    }

    minGap = Math.min(minGap, Math.abs(sour - bitter)); // 최소 차이 갱신
  }

  return minGap;
}
