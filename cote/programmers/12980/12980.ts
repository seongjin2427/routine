// * 12980. 점프와 순간이동

export default function solution(N: number) {
  if (N === 1) return 1;

  let answer = new Set();
  for (let i = 1; i < N; i *= 2) answer.add(N % i);
  return answer.size;
}
