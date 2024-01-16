// * 3085. 사탕 게임
// * ❌ 실패
// * 브루트포스

// * 3 <= N <= 50

// * 전체 행, 열이 아닌 일부 행, 열로서도 가장 길면 카운트하면 됨
// * 모든 경우의 수를 확인해야 함

// * 1. 반복 범위 오류:
// * 현재 코드는 N - 1까지만 순회합니다.
// * 이로 인해 마지막 행과 열에서의 교환 가능성을 고려하지 않습니다.
// * 반복문의 범위를 N까지 확장해야 합니다.

// * 2. 가로, 세로 탐색 누락:
// * getCount 함수는 오직 하나의 방향(아래 또는 오른쪽)으로만 연속된 사탕을 세고 있습니다.
// * 이는 가로 또는 세로 방향의 연속된 사탕을 전부 고려하지 않는 문제를 야기합니다.
// * 가로와 세로 모두에서 연속된 사탕을 세어야 합니다.

// * 3. 중복된 보드 복사:
// * 각 교환 시마다 전체 보드를 복사하고 있습니다. 이는 비효율적입니다.
// * 대신, 두 사탕을 교환하고 최대 길이를 계산한 후 원래 상태로 되돌리는 방식이 더 효율적일 것입니다.

// * 4. 가로 및 세로 교환 로직의 오류:
// * 현재 코드는 (i, j)와 (i+1, j) 그리고 (j, i)와 (j, i+1)를 교환하는 것으로 보입니다.
// * 이는 잘못된 인덱스 사용입니다.
// * 가로 교환은 (i, j)와 (i, j+1)를, 세로 교환은 (i, j)와 (i+1, j)를 대상으로 해야 합니다.

// export default function solution(input: string) {
//   const [rawN, ...rawCandies] = input.split("\n");
//   const N = +rawN;
//   const candies = rawCandies.map((candy) => candy.split(""));

//   let maxCount = 0;

//   const getCount = (y: number, x: number, copied: string[][]) => {
//     let yCount = 1;
//     let xCount = 1;
//     const target = copied[y][x];
//     // 이 코드로는 연속적으로 같은 사탕이 몇개인지 정확히 파악하지 못함
//     // C Y C일지라도 2개로 카운트함
//     for (let dy = y + 1; dy < N; dy++) {
//       if (target === copied[dy][x]) yCount++;
//       else break;
//     }

//     for (let dx = x + 1; dx < N; dx++) {
//       if (target === copied[y][dx]) xCount++;
//       else break;
//     }

//     return Math.max(yCount, xCount);
//   };

//   for (let i = 0; i < N - 1; i++) {
//     for (let j = 0; j < N - 1; j++) {
//       if (candies[i][j] !== candies[i + 1][j]) {
//         const copied = [...candies.map((candy) => candy.slice(0))];
//         [copied[i][j], copied[i + 1][j]] = [copied[i + 1][j], copied[i][j]];
//         maxCount = Math.max(maxCount, getCount(i, j, copied));
//       }
//       if (candies[i][j] !== candies[i][j + 1]) {
//         const copied = [...candies.map((candy) => candy.slice(0))];
//         [copied[i][j], copied[i][j + 1]] = [copied[i][j + 1], copied[i][j]];
//         maxCount = Math.max(maxCount, getCount(i, j, copied));
//       }
//     }
//   }

//   return maxCount;
// }

// * GPT 코드
export default function solution(input: string) {
  const [rawN, ...rawCandies] = input.split("\n");
  const N = +rawN;
  const candies = rawCandies.map((candy) => candy.split(""));

  let maxCount = 0;

  const getCount = (y: number, x: number) => {
    let yCount = 1,
      xCount = 1;
    const target = candies[y][x];

    // 세로방향 탐색
    for (let dy = y + 1; dy < N && candies[dy][x] === target; dy++) {
      yCount++;
    }
    for (let dy = y - 1; dy >= 0 && candies[dy][x] === target; dy--) {
      yCount++;
    }
    // 가로방향 탐색
    for (let dx = x + 1; dx < N && candies[y][dx] === target; dx++) {
      xCount++;
    }
    for (let dx = x - 1; dx >= 0 && candies[y][dx] === target; dx--) {
      xCount++;
    }

    return Math.max(xCount, yCount);
  };

  const swapAndCount = (y1: number, x1: number, y2: number, x2: number) => {
    [candies[y1][x1], candies[y2][x2]] = [candies[y2][x2], candies[y1][x1]];
    const count = Math.max(getCount(y1, x1), getCount(y2, x2));
    [candies[y1][x1], candies[y2][x2]] = [candies[y2][x2], candies[y1][x1]];
    return count;
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      // 오른쪽 사탕과 교환
      if (x < N - 1) {
        maxCount = Math.max(maxCount, swapAndCount(y, x, y, x + 1));
      }
      // 아래쪽 사탕과 교환
      if (y < N - 1) {
        maxCount = Math.max(maxCount, swapAndCount(y, x, y + 1, x));
      }
    }
  }

  return maxCount;
}
