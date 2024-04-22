//* 12978. 배달
//* ❌ 실패
//* 완전탐색

//* 1 <= N <= 50
//* 1 <= road.length <= 2_000
//* 1 <= K <= 500_000

export default function delivery(N: number, road: number[][], K: number) {
  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach(([start, end, distance]) => {
    graph[start].push([end, distance]);
    graph[end].push([start, distance]);
  });

  const queue = [[1, 0]]; // 시작 마을과 초기 거리
  const minDist = Array(N + 1).fill(Infinity); // 최소 거리를 무한대로 초기화
  minDist[1] = 0; // 시작점의 최소 거리는 0

  while (queue.length) {
    const [currentVillage, currentDistance] = queue.shift();

    graph[currentVillage].forEach(([nextVillage, nextDistance]) => {
      const newDistance = currentDistance + nextDistance;
      if (newDistance < minDist[nextVillage]) {
        // 더 짧은 경로 발견 시 업데이트
        minDist[nextVillage] = newDistance;
        queue.push([nextVillage, newDistance]);
      }
    });
  }

  // K 이하의 거리에 있는 마을 수 세기
  return minDist.filter((distance) => distance <= K).length;
}

// function solution(N, road, K) {
//   let result = new Set([1]);
//   const town = {};
//   const visited = new Array(N + 1).fill(false);
//   visited[1] = true;

//   road.forEach((bridge) => {
//     const [currentTown, nextTown, time] = bridge;
//     if (!town[currentTown]) town[currentTown] = [];
//     if (!town[nextTown]) town[nextTown] = [];
//     town[currentTown].push([nextTown, time]);
//     town[nextTown].push([currentTown, time]);
//   });

//   const dfs = (bridge, time, visitedTown) => {
//     const [currentTown, currentTime] = bridge;
//     time += currentTime;
//     if (time <= K && !visitedTown[currentTown]) {
//       result.add(currentTown);
//       visitedTown[currentTown] = true;

//       for (const nextBridge of town[currentTown]) {
//         dfs(nextBridge, time, visitedTown);
//       }
//       visitedTown[currentTown] = false;
//     }
//     time -= currentTime;
//   };

//   for (const currentTown of town["1"]) {
//     dfs(currentTown, 0, visited);
//   }

//   return result.size;
// }
