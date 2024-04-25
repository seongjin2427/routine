//* 1446. 지름길
//* ❌ 실패
//* DP

//* D <= 10_000
//* N <= 12

export default function shortcut(input: string) {
  const [rawND, ...rawRoads] = input.split("\n");
  const [N, D] = rawND.split(" ").map((v) => +v);
  const roads = rawRoads
    .map((r) => r.split(" ").map((v) => +v))
    .sort((a, b) => (a[0] === b[0] ? a[2] - b[2] : a[0] - b[0]));

  let answer = D;
  let matrix = new Map();

  for (const [start, end, distance] of roads) {
    let min = matrix.get(end) ?? end;

    if (min > D) continue;

    min = Math.min(min, start + distance);

    for (let [matrixEnd, matrixDistance] of matrix) {
      if (matrixEnd <= start) {
        min = Math.min(min, start - matrixEnd + matrixDistance + distance);
      }
    }

    matrix.set(end, min);
  }

  for (const [matrixEnd, matrixDistance] of matrix) {
    answer = Math.min(answer, D - matrixEnd + matrixDistance);
  }

  return answer;
}
