//* 25214. 크림 파스타
//* ⭕️ 통과
//* 그리디, DP

//* 1 <= N <= 200_000
//* 1 <= Ai <= 1_000_000_000

export default function creamPasta(input: string) {
  const [rawN, rawNumbers] = input.split("\n");
  const N = +rawN;
  const numbers = rawNumbers.split(" ").map((v) => +v);

  let min = numbers[0];
  let max = 0;
  const answer = [0];

  for (let i = 1; i < N; i++) {
    let gap = numbers[i] - min;

    min = Math.min(min, numbers[i]);
    max = Math.max(max, gap);
    answer.push(max);
  }

  return answer.join(" ");
}
