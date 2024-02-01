// * 1051. 숫자 정사각형
// * ⭕️ 통과
// * 브루트포스

// * N, M <= 50

export default function solution(input: string) {
  const [rawNM, ...square] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);

  let answer = 1;
  const maxSize = Math.min(N, M) - 1;

  for (let k = maxSize; k > 0; k--) {
    for (let i = 0; i < N - k; i++) {
      for (let j = 0; j < M - k; j++) {
        const dots = [
          square[i][j],
          square[i][j + k],
          square[i + k][j],
          square[i + k][j + k],
        ];
        if (dots.every((dot) => dot === dots[0])) {
          return (k + 1) ** 2;
        }
      }
    }
  }

  return answer;
}
