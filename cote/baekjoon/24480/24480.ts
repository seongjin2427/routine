//* 24480. 알고리즘 수업 - 깊이 우선 탐색 2
//* ❌ 실패
//* DFS

//* 5 <= N <= 100_000
//* 1 <= M <= 200_000

export default function algorithmDFS(input: string) {
  const [rawNMR, ...rawEdges] = input.split("\n");
  const [N, M, R] = rawNMR.split(" ").map((v) => +v);
  const edges = rawEdges.map((edge) => edge.split(" ").map((v) => +v));

  let index = 1;
  const orders = Array.from({ length: N + 1 }, () => 0);
  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array.from({ length: N + 1 }, () => false);
  for (const [start, end] of edges) {
    graph[start].push(end);
    graph[end].push(start);
  }

  for (const node of graph) {
    node.sort((a, b) => b - a);
  }

  const dfs = (node: number) => {
    visited[node] = true;
    orders[node] = index++;
    for (const nextNode of graph[node]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  };

  dfs(R);

  return orders.slice(1).join("\n");
}
