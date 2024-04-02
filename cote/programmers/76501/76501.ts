//* 76501. 음양 더하기
//* ⭕️ 통과
//* 구현

//* 1 <= absolutes.length <= 1_000
//* 1 <= absolutes[i] <= 1_000

export default function sumYinyang(absolutes: number[], signs: boolean[]) {
  return absolutes
    .map((n, idx) => +n * (signs[idx] ? 1 : -1))
    .reduce((a, b) => a + b, 0);
}
