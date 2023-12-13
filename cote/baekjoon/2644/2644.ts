// ! 시간 초과
// ❌
// * 그래프, 완전 탐색

// * 1 <= n <= 100
// 트리 순회?

export default function solution(input: string) {
  const [n, targetRelation, m, ...relations] = input.split("\n");
  const [person1, person2] = targetRelation.split(" ");

  const graph = {};

  relations.forEach((relation) => {
    const [x, y] = relation.split(" ");
    graph[x] ? graph[x].push(y) : (graph[x] = [y]);
    graph[y] ? graph[y].push(x) : (graph[y] = [x]);
  });

  let count = 0;
  const visited = Array.from({ length: +n }, () => false);

  const bfs = () => {
    const queue = [];
    queue.push([person1, 0]);
    visited[person1] = true;

    while (queue.length) {
      const [target, relationCount] = queue.shift();
      visited[target] = true;

      if (target === person2) {
        count = relationCount;
        break;
      }

      if (graph[target]) {
        graph[target].forEach((nextPerson) => {
          if (!visited[nextPerson]) {
            visited[nextPerson] = true;
            queue.push([nextPerson, relationCount + 1]);
          }
        });
      }
    }
  };

  bfs();

  return count || -1;
}

// * GPT 작성
// export default function solution(input: string): number {
//   const [nStr, targetRelation, mStr, ...relations] = input.split("\n");
//   const n = +nStr;
//   const [person1, person2] = targetRelation.split(" ");

//   const graph = new Map();

//   relations.forEach((relation) => {
//     const [x, y] = relation.split(" ").map(Number);
//     graph.set(x, (graph.get(x) || []).concat(y));
//     graph.set(y, (graph.get(y) || []).concat(x));
//   });

//   let count = 0;
//   const visited = Array(n + 1).fill(false);

//   const bfs = () => {
//     const queue = [];
//     queue.push(...graph.get(+person1).map((next) => [next, 1]));

//     while (queue.length) {
//       const [target, relationCount] = queue.shift();
//       visited[target] = true;

//       if (target === +person2) {
//         count = relationCount;
//         break;
//       }

//       if (graph.has(target)) {
//         queue.push(
//           ...graph.get(target).map((next) => [next, relationCount + 1])
//         );
//         graph.delete(target); // 해당 노드는 한 번 방문했으므로 삭제
//       }
//     }

//     if (!visited[+person2]) count = -1;
//   };

//   bfs();

//   return count;
// }
