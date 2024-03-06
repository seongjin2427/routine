//* 1504. 특정한 최단 경로
//* ❌ 실패
//* 다익스트라

//* 2 <= N <= 800
//* 0 <= E <= 200_000

function dijkstra(graph: number[][][], start: number, end: number) {
  const distances = new Array(graph.length).fill(Infinity);
  const visited = new Array(graph.length).fill(false);
  const queue = [];
  distances[start] = 0;
  queue.push([start, 0]);

  while (queue.length) {
    queue.sort((a, b) => a[1] - b[1]);
    const [current, currentDist] = queue.shift();
    if (visited[current]) continue;
    visited[current] = true;

    for (const [next, nextDist] of graph[current]) {
      const distance = currentDist + nextDist;
      if (distance < distances[next]) {
        distances[next] = distance;
        queue.push([next, distance]);
      }
    }
  }

  return distances[end];
}

export default function specificShortestRoute(input: string) {
  const [rawNE, ...rawNodes] = input.split("\n");
  const [N, E] = rawNE.split(" ").map(Number);
  const nodes = rawNodes.slice(0, E).map((node) => node.split(" ").map(Number));
  const [v1, v2] = rawNodes.at(-1).split(" ").map(Number);

  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, c] of nodes) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const path1 =
    dijkstra(graph, 1, v1) + dijkstra(graph, v1, v2) + dijkstra(graph, v2, N);
  const path2 =
    dijkstra(graph, 1, v2) + dijkstra(graph, v2, v1) + dijkstra(graph, v1, N);

  const shortestPath = Math.min(path1, path2);
  return shortestPath === Infinity ? -1 : shortestPath;
}
