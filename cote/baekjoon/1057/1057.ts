// * 1057. 토너먼트
// * ⭕️ 통과
// * 수학, 브루트포스

// * 2 <= N <= 100_000

export default function solution(input: string) {
  const [N, jimin, hansu] = input.split(" ").map(Number);

  let first = Math.min(jimin, hansu);
  let second = Math.max(jimin, hansu);

  for (let i = 1; i <= N; i++) {
    first = Math.ceil(first / 2);
    second = Math.ceil(second / 2);

    if (first === second) {
      return i;
    }
  }
}
