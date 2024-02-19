// * 16928. 뱀과 사다리 게임
// * ❌ 실패
// * BFS, 그래프

// * 1 <= N, M <= 15

// * 전체 보드판에서 사다리 또는 뱀을 타고 100번째 보드칸에 도착할 수 있는 최소값 구하기

export default function solution(value: string) {
  const input = value.split("\n");
  const [n, m] = input[0].split(" ").map((e) => +e);

  let start = 1;
  let end = 100;

  const visited = Array(101).fill(Infinity);
  visited[start] = 0;

  const map = {};
  const movePoints = input
    .slice(1)
    .map((value) => value.split(" ").map(Number));

  for (const [from, to] of movePoints) {
    map[from] = to;
  }

  const queue = [{ current: start, currentCount: 0 }];

  while (queue.length) {
    const { current, currentCount } = queue.shift();

    if (map[current]) {
      const nextNumber = map[current];

      if (visited[nextNumber] > currentCount) {
        visited[nextNumber] = currentCount;
        queue.push({ current: nextNumber, currentCount });
      }

      continue;
    }

    for (let i = 1; i <= 6; i++) {
      const nextNumber = current + i;
      if (nextNumber > 100) continue;

      const nextCount = currentCount + 1;
      if (visited[nextNumber] > nextCount) {
        visited[nextNumber] = nextCount;
        queue.push({ current: nextNumber, currentCount: nextCount });
      }
    }
  }

  return visited[end];
}

// export default function solution(input: string) {
//   const [rawNM, ...rawLadderSnakes] = input.split("\n");
//   const [N, M] = rawNM.split(" ").map(Number);
//   const ladderSnakes = rawLadderSnakes.map((state) =>
//     state.split(" ").map(Number)
//   );

//   //* 최소 횟수를 확인할 count 변수를 선언한다.
//   let count = Infinity;

//   //* 방문한 숫자를 체크하기 위한 visitedNumbers를 선언한다.
//   const visitedNumber = new Array(101).fill(false);

//   //* 1.
//   //* 노드를 모아놓을 tree를 선언한다.
//   const tree = {};

//   //* 2.
//   //* tree에 1~100까지 각각 [n + 1, ..., n + 6] 배열을 할당한다.
//   for (let node = 1; node <= 100; node++) {
//     tree[node] = [];
//     for (let plus = 1; plus <= 6; plus++) {
//       if (node + plus <= 100) {
//         tree[node].push(node + plus);
//       }
//     }
//   }

//   //* 3.
//   //* ladderSnakes의 각 사다리 및 뱀의 첫 숫자에 해당하는 노드의 배열에 둘째 숫자만 남긴다.
//   for (const [from, to] of ladderSnakes) {
//     tree[from] = [to];
//   }

//   //* 4.
//   //* bfs 함수를 선언한다.
//   //? 무조건 사다리만 탄다고 최소 횟수를 구할 수 있지는 않다.
//   //? ex) 12 -> 50, 26 -> 99, 51 -> 25
//   //* 1~100까지 각 노드에서 [n+1, ..., n + 6] 만큼 노드를 확인하면서 횟수를 체크한다.
//   //* 확인한 각 노드가 100이 되면, 해당 횟수 중 적은 숫자로 count를 업데이트 한다.
//   const bfs = () => {
//     const queue = [];

//     //* 4-1. 처음 주사위를 던진 경우: 1~6의 각 노드의 배열과 던진 횟수 1을 포함해 queue에 추가한다. [숫자, 횟수]
//     for (const firstCases of tree[1]) {
//       for (const nextTargetNumber of tree[firstCases]) {
//         queue.push([nextTargetNumber, 1]);
//       }
//     }

//     //* 4-2. queue가 빌 때까지 while 반복문을 실행한다.
//     while (queue.length) {
//       const [currentNumber, currentCount] = queue.shift();

//       //* 4-3. 숫자가 100이라면 count와 비교해 더 적은 횟수를 count에 업데이트 한다.
//       if (currentNumber === 100) {
//         count = Math.min(count, currentCount);
//       }

//       //* 4-4. 각 tree[숫자]의 배열의 숫자들과 횟수 + 1을 다시 queue에 추가한다. [숫자, 횟수 + 1]
//       for (const nextTargetNumber of tree[currentNumber]) {
//         if (visitedNumber[nextTargetNumber] === false) {
//           visitedNumber[nextTargetNumber] = true;
//           queue.push([nextTargetNumber, currentCount + 1]);
//         }
//       }

//       //? 이렇게 하면 무한 루프가 발생할 수 있다. 그렇다고 방문한 숫자를 체크하자니 제대로 확인이 안될 듯..
//       //! 방문한 숫자 체크하면 상관 없을 것 같다. 왜냐하면 더 빨리 방문했다면, 더 적은 횟수일 테니까.
//     }
//   };

//   //* bfs 함수를 실행한다.
//   bfs();

//   //* 5.
//   //* count를 반환한다.
//   return count;
// }
