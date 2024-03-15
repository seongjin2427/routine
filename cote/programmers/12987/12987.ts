//* 12987. 숫자 게임
//* ❌ 포기
//* 정렬

//* 1 <= A.length, B.length <= 100_000
//* 1 <= A[i], B[i] <= 1_000_000_000

export default function numberGame(A: number[], B: number[]) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (const a of A) {
    const max = B[B.length - 1];
    if (a < max) {
      answer++;
      B.pop();
    }
  }

  return answer;
}
