//* 2304. 창고 다각형
//* ❌ 실패
//* 스택, 브루트포스

//* 1 <= N <= 1_000
//* 1 <= L, H <= 1_000

export default function polygonWarehouse(input: string) {
  const [rawN, ...rawPillars] = input.split("\n");
  const N = +rawN;
  const pillars = rawPillars.map((pillar) => pillar.split(" ").map((v) => +v));

  let answer = 0;
  let upStack = [];
  let downStack = [];
  // 기둥의 가로축 기준 위치로 정렬
  pillars.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < pillars.length; i++) {
    // 오름차순 정렬
    if (upStack.length) {
      if (upStack[upStack.length - 1][1] < pillars[i][1]) {
        upStack.push(pillars[i]);
      }
    } else {
      upStack.push(pillars[i]);
    }
    // 내림차순 정렬
    while (downStack.length) {
      if (downStack[downStack.length - 1][1] < pillars[i][1]) {
        downStack.pop();
      } else break;
    }
    downStack.push(pillars[i]);
  }

  // 가장 높은 기둥 기준 왼쪽 부분 넓이 계산
  for (let i = 0; i < upStack.length - 1; i++) {
    answer += (upStack[i + 1][0] - upStack[i][0]) * upStack[i][1];
  }
  // 가장 높은 기둥 기준 오른쪽 부분 넓이 계산
  for (let i = 0; i < downStack.length - 1; i++) {
    answer += (downStack[i + 1][0] - downStack[i][0]) * downStack[i + 1][1];
  }
  // 가장 높은 기둥의 넓이만큼 더해줘야함
  answer += downStack[0][1];

  return answer;
}
