// * 148653. 마법의 엘리베이터
// * ❌ 실패
// * 그리디

// * 1 <= storey <= 100_000_000

// * storey가 0이 될 때까지 필요한 마법의 돌 개수를 구하기

export default function solution(storey: number) {
  let count = 0;
  let current = storey;

  while (current > 0) {
    const target = current % 10;
    const truncatedCurrent = Math.trunc(current / 10);

    if (5 >= target) {
      const surplus = Math.trunc((current % 100) / 10) >= 5 ? 1 : 0;

      count += target;
      current = truncatedCurrent;

      if (target === 5) {
        current += surplus;
      }
    } else {
      count += 10 - target;
      current = truncatedCurrent + 1;
    }
  }

  return count;
}
