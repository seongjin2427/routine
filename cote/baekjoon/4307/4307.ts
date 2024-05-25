//* 4307. 개미
//* ❌ 실패
//* 구현

//* n <= 100_000
//* l <= 1_000_000

export default function ants(input: string) {
  const [rawT, ...lines] = input.split("\n");

  let answer = "";

  for (let i = 0; i < lines.length; i++) {
    const [L, N] = lines[i].split(" ").map((v) => +v);
    const ant = lines.slice(i + 1, i + N + 1).map((v) => +v);

    const min = [];
    const max = [];

    ant.forEach((a) => {
      const distance = L - a;
      min.push(a > distance ? distance : a);
      max.push(a, distance);
    });

    answer += `${Math.max(...min)} ${Math.max(...max)}\n`;
    i += N;
  }

  return answer.trim();
}
