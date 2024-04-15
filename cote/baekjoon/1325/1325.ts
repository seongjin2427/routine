//* 1325. 효율적인 해킹
//* ❌ 실패
//* 완전탐색

//* N <= 10_000
//* M <= 100_000

export default function efficientHacking(input: string) {
  const [rawNM, ...rawRelations] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const relations = rawRelations.map((r) => r.split(" ").map((v) => +v));

  const graph = Array.from({ length: N + 1 }, () => []);
  relations.forEach(([a, b]) => graph[b].push(a));

  let answer = [];
  let max = 0;

  const dfs = (start: number) => {
    const stack = [start];
    const visited = Array.from({ length: N + 1 }, () => false);
    let count = 0;

    while (stack.length) {
      const target = stack.pop();
      const next = graph[target];
      visited[target] = true;

      for (const value of next) {
        if (!visited[value]) {
          visited[value] = true;
          count++;
          stack.push(value);
        }
      }
    }

    if (count === max) {
      answer.push(start);
    } else if (count > max) {
      answer = [start];
      max = count;
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(i);
  }

  return answer.join(" ");
}
