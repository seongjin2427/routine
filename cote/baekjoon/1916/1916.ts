//* 1916. 최소비용 구하기
//* ❌ 실패
//* 다익스트라, 최단경로

//* 1 <= N <= 1_000
//* 1 <= M <= 100_000

export default function calculateLowestCost(input: string) {
  const [rawN, rawM, ...rawBuses] = input.split("\n");
  const [N, M] = [+rawN, +rawM];
  const [startNumber, endNumber] = rawBuses
    .pop()
    .split(" ")
    .map((v) => +v);
  const buses = rawBuses.map((bus) => bus.split(" ").map((v) => +v));

  const visited = [...Array.from({ length: M + 1 }).fill(false)];
  const distances = Array.from({ length: M + 1 }).fill(Infinity) as number[];

  const graph = Array.from(Array(N + 1), () => []);

  buses.forEach(([start, end, cost]) => graph[start].push([end, cost]));

  const getMinimumNode = () => {
    let min = Infinity;
    let index = 0;
    for (const i in distances) {
      if (!visited[i] && min > distances[i]) {
        min = distances[i];
        index = +i;
      }
    }

    return index;
  };

  const dijkstra = (start: number) => {
    distances[start] = 0;
    visited[start] = true;
    for (const i of graph[start]) {
      const [node, cost] = i;
      distances[node] = cost;
    }

    for (let i = 0; i < N; i++) {
      const cur = getMinimumNode();
      visited[cur] = true;

      for (const j of graph[cur]) {
        const node = j[0];
        const cost = distances[cur] + j[1];
        if (cost < distances[node]) {
          distances[node] = cost;
        }
      }
    }
  };

  dijkstra(startNumber);

  return distances[endNumber];
}
