//* 5567. 결혼식
//* ⭕️ 성공
//* 그래프

//* 2 <= n <= 500
//* 1 <= m <= 10_000

export default function wedding(input: string) {
  const [rawN, rawM, ...rawRelations] = input.split("\n");
  const [N, M] = [+rawN, +rawM];
  const relations = rawRelations.map((relation) =>
    relation.split(" ").map((v) => +v)
  );

  const graph = Array.from({ length: N + 1 }, () => []);
  relations.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

  const invitedPeople = [];
  const queue = [[1, 0]];
  const visited = new Array(N + 1).fill(false);
  visited[1] = true;

  while (queue.length) {
    const [target, depth] = queue.shift();

    for (const next of graph[target]) {
      if (!visited[next] && depth < 2) {
        visited[next] = true;
        queue.push([next, depth + 1]);
        invitedPeople.push(next);
      }
    }
  }

  return invitedPeople.length;
}
