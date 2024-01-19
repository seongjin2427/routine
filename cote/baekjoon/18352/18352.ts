// * 18352. 특정 거리의 도시 찾기
// * ❌ 실패
// * 그래프, BFS

// * 2 <= N <= 300_000
// * 1 <= M <= 1_000_000
// * 1 <= K <= 300_000
// * 1 <= X <= N

// * GPT 1
export default function solution(input: string) {
  const [rawN, ...rawRoads] = input.split("\n");
  const [N, M, K, X] = rawN.split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array(N + 1).fill(-1);

  rawRoads.forEach((road) => {
    const [start, end] = road.split(" ").map(Number);
    graph[start].push(end);
  });

  const queue = [[X, 0]];
  distance[X] = 0;

  while (queue.length) {
    const [current, dist] = queue.shift()!;

    for (const next of graph[current]) {
      if (distance[next] === -1) {
        distance[next] = dist + 1;
        queue.push([next, dist + 1]);
      }
    }
  }

  const result = distance
    .map((dist, idx) => (dist === K ? idx : -1))
    .filter((idx) => idx !== -1);

  return result.length ? result.join("\n") : "-1";
}

// * GPT 2
// export default function solution(input: string) {
//   const [rawN, ...rawRoads] = input.split("\n");
//   const [N, M, K, X] = rawN.split(" ").map((v) => +v);
//   const roads = rawRoads.map((road) => road.split(" ").map((v) => +v));

//   const graph = Array.from({ length: N + 1 }, () => []);
//   roads.forEach(([start, end]) => {
//     graph[start].push(end);
//   });

//   const bfs = (start: number) => {
//     const queue = [[start, 0]];
//     const visited = new Array(N + 1).fill(false);
//     const answer = [];

//     while (queue.length) {
//       const [city, distance] = queue.shift();

//       if (distance === K && !visited[city]) {
//         answer.push(city);
//         visited[city] = true;
//         continue;
//       }

//       if (!visited[city]) {
//         visited[city] = true;
//         graph[city].forEach((nextCity) => {
//           if (!visited[nextCity]) {
//             queue.push([nextCity, distance + 1]);
//           }
//         });
//       }
//     }

//     return answer.length ? answer.sort((a, b) => a - b) : [-1];
//   };

//   return bfs(X).join("\n").trim();
// }

// // ! 메모리 초과
// export default function solution(input: string) {
//   const [rawN, ...rawRoads] = input.split("\n");
//   const [N, M, K, X] = rawN.split(" ").map((v) => +v);
//   const roads = rawRoads.map((road) => road.split(" ").map((v) => +v));
//   // * K = 2, X = 1

//   const cities = {};
//   const answer = [];

//   roads.forEach(([start, end]) => {
//     cities[start] ? cities[start].push([end, 1]) : (cities[start] = [[end, 1]]);
//   });

//   const bfs = (k: number) => {
//     const queue = [...cities[k]];
//     const visited = new Array(N).fill(false);
//     visited[k] = true;

//     while (queue.length) {
//       const [city, distance] = queue.shift();

//       if (distance < K) visited[city] = true;
//       if (distance > K) break;

//       if (!visited[city] && distance === K) {
//         answer.push(city);
//         continue;
//       }
//       if (cities[city] === undefined || visited[city]) continue;

//       visited[city] = true;
//       queue.push(
//         ...cities[city].map(([nextCity, currentDistance]) => [
//           nextCity,
//           currentDistance + 1,
//         ])
//       );
//     }
//   };

//   bfs(X);

//   if (!answer.length) answer.push("-1");

//   return answer
//     .sort((prev, cur) => prev - cur)
//     .join("\n")
//     .trim();
// }
