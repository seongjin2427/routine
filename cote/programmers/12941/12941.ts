// ! 성공!
// ⭕️

export default function solution(A: number[], B: number[]) {
  A.sort((prev, cur) => prev - cur);
  B.sort((prev, cur) => cur - prev);

  return A.reduce((prev, cur, index) => (prev += cur * B[index]), 0);
}
