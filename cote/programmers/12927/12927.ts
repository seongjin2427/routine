//* 12927. 야근 지수
//* ❌ 실패
//* 우선순위큐, 최대힙

//* 1 <= works.length <= 20_000
//* workds[i] <= 50_000
//* n <= 1_000_000

export default function overtimeIndex(works: number[], n: number) {
  // 작업량이 큰 순서대로 정렬
  works.sort((a, b) => b - a);

  while (n > 0) {
    // 첫 번째 요소(가장 큰 작업량)가 0이면 더 이상 줄일 수 없으므로 종료
    if (works[0] === 0) break;

    // 첫 번째 요소(가장 큰 작업량)를 1 줄임
    works[0] -= 1;
    n -= 1;

    // 수정된 첫 번째 요소를 적절한 위치로 재정렬
    let i = 0;
    while (i < works.length - 1 && works[i] < works[i + 1]) {
      [works[i], works[i + 1]] = [works[i + 1], works[i]];
      i += 1;
    }
  }

  // 야근 피로도 계산
  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
