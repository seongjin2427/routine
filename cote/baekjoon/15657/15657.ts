// * 15657. N과 M (8)
// * ⭕️ 통과
// * 완전탐색

// * 1 <= M <= N <= 8

export default function solution(input: string) {
  const [rawNM, rawNumbers] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const numbers = rawNumbers
    .split(" ")
    .map((v) => +v)
    .sort((prev, cur) => prev - cur);

  let answer = "";

  const getSeries = (start: number, series: number[]) => {
    if (series.length >= M) {
      return (answer += `${series.join(" ")}\n`);
    }

    for (const target of numbers) {
      if (start <= target) {
        series.push(target);
        getSeries(target, series);
        series.pop();
      }
    }
  };

  for (const start of numbers) {
    getSeries(start, [start]);
  }

  return answer.trim();
}
