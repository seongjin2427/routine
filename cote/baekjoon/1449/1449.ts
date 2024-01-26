// * 1449. 수리공 항승
// * ⭕️ 통과
// * 그리디, 정렬

// * N, L <= 1_000

// * GPT 코드
export default function GPTSolution(input: string) {
  const [rawNL, rawLocations] = input.split("\n");
  const [N, M] = rawNL.split(" ").map((v) => +v);
  const locations = rawLocations
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

  // 필요한 테이프 개수
  let tapeCount = 0;

  // 현재 커버되는 마지막 위치
  let lastCovered = 0;

  for (const location of locations) {
    // 현재 위치가 이미 커버된 경우 건너뜀
    if (location <= lastCovered) {
      continue;
    }

    // 테이프 하나 추가
    tapeCount++;

    // 이 테이프로 커버할 수 있는 마지막 위치 업데이트
    // 테이프 길이는 M이지만 양 끝에 0.5씩 여유를 두므로 M-1의 범위를 커버
    lastCovered = location + M - 1;
  }

  return tapeCount;
}

// * 직접 푼 코드
function solution(input: string) {
  const [rawNL, rawLocations] = input.split("\n");
  const [N, M] = rawNL.split(" ").map((v) => +v);
  const locations = rawLocations.split(" ").map((v) => +v);

  const pipe = new Array(1001).fill(0);
  locations.forEach((location) => (pipe[location] = 1));

  let answer = 0;
  for (let i = 1; i < pipe.length; i++) {
    if (pipe[i]) {
      const target = pipe.slice(i, i + M).reduce((acc, cur) => acc + cur, 0);
      if (0 < target) {
        answer++;
        i += M - 1;
      }
    }
  }

  return answer;
}
