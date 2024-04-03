//* 5014. 스타트링크
//* ⭕️ 통과
//* 완전탐색

//* 1 <= S, G <= F <= 1_000_000
//* 0 <= U, D <= 1_000_000

export default function startlink(input: string) {
  const [F, S, G, U, D] = input.split(" ").map((v) => +v);

  let min = Infinity;
  const queue = [[S, 0]];
  const visited = new Array(F + 1).fill(false);

  while (queue.length) {
    const [current, currentCount] = queue.shift();

    if (current === G) {
      min = Math.min(min, currentCount);
    }

    if (1 <= current && current <= F && !visited[current]) {
      visited[current] = true;
      queue.push([current + U, currentCount + 1]);
      queue.push([current - D, currentCount + 1]);
    }
  }

  return min === Infinity ? "use the stairs" : min;
}
