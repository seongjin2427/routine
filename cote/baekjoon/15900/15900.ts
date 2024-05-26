//* 15900. 나무 탈출
//* ❌ 실패
//* DFS

//* 2 <= N <= 500_000
//* 1 <= a, b <= N, a !== b

export default function escapeTree(input: string) {
  const [rawN, ...rawEdges] = input.split("\n");
  const N = +rawN;
  const edges = rawEdges.map((edge) => edge.split(" ").map((v) => +v));

  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

  const leafNodes = [];
  const parent = Array(N + 1).fill(0);
  const depth = Array(N + 1).fill(0);

  const queue = [1];
  parent[1] = -1;

  while (queue.length > 0) {
    const node = queue.shift();
    let isLeaf = true;

    for (const neighbor of graph[node]) {
      if (neighbor !== parent[node]) {
        parent[neighbor] = node;
        depth[neighbor] = depth[node] + 1;
        queue.push(neighbor);
        isLeaf = false;
      }
    }

    if (isLeaf) {
      leafNodes.push(node);
    }
  }

  const totalDepth = leafNodes.reduce((sum, node) => sum + depth[node], 0);
  const result = totalDepth % 2 === 1 ? "Yes" : "No";

  return result;
}
