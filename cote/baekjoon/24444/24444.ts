//* 24444. 알고리즘 수업 - 너비 우선 탐색 1
//* ❌ 실패
//* BFS

//* 5 <= N <= 100_000
//*1 <= M <= 200_000

export default function algorithmClassBFS(input: string) {
  const [rawNMR, ...rawVertexes] = input.split("\n");
  const [N, M, R] = rawNMR.split(" ").map((v) => +v);
  const edges = rawVertexes.map((vertex) => vertex.split(" ").map((v) => +v));

  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);
  const order = Array(N + 1).fill(0);

  // 그래프 구성
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // 인접 리스트 정렬
  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  let count = 1; // 방문 순서
  const queue = [R];
  visited[R] = true;
  order[R] = count++;

  // BFS 실행
  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
        order[neighbor] = count++;
      }
    }
  }

  // 방문 순서 출력
  let result = "";
  for (let i = 1; i <= N; i++) {
    result += `${order[i]}\n`;
  }
  return result.trim();
}
