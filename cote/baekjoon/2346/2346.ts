// * 2346. 풍선 터뜨리기
// * ❌ 실패
// * 큐

// * 1 <= N <= 1_000

// ! 메모리 초과
export default function solution(input: string) {
  const [rawN, rawMoves] = input.split("\n");
  const N = +rawN;
  const moves = rawMoves
    .split(" ")
    .map((v, index) => ({ index: index + 1, value: +v }));

  let answer = "";
  let removeIndex = 1;

  for (let i = 0; i < N; i++) {
    const target = removeIndex % moves.length;
    const { index, value } = moves.splice(
      target < 0 ? target : target - 1,
      1
    )[0];

    answer += index + " ";
    removeIndex = value;
  }

  return answer.trim();
}
