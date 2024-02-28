//* 14500. 테트로미노
//* ❌ 실패
//* 브루트포스

//* 4 <= N, M <= 500

const TETROMINOES = {
  LINE: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  ],
  BOX: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  L: [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [0, -1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [0, -1],
      [0, -2],
      [1, -2],
    ],
    [
      [0, 0],
      [0, -1],
      [0, -2],
      [-1, -2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [-1, 2],
    ],
  ],
  STAIR: [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ], // S 정상
    [
      [0, 0],
      [1, 0],
      [1, -1],
      [2, -1],
    ], // S 반대 방향 (회전)
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ], // Z 정상
    [
      [0, 0],
      [0, 1],
      [-1, 1],
      [-1, 2],
    ], // Z 반대 방향 (회전)
  ],
  MOUNTAIN: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [-1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, -1],
    ],
  ],
};

const isNotInLimit = (target: number, limit: number) => {
  return target < 0 || limit <= target;
};

const checkWithCoordinates = (
  startY: number,
  startX: number,
  coordinates: number[][],
  board: number[][]
) => {
  let sum = 0;

  for (const [my, mx] of coordinates) {
    const y = startY + my;
    const x = startX + mx;

    if (isNotInLimit(y, board.length) || isNotInLimit(x, board[0].length)) {
      return 0;
    }

    sum += board[y][x];
  }

  return sum;
};

export default function tetromino(input: string) {
  const [rawNM, ...rawBoard] = input.split("\n");
  const [N, M] = rawNM.split(" ").map(Number);
  const board = rawBoard.map((rawRow) => rawRow.split(" ").map(Number));

  let max = 0;
  //* 모든 경우의 수 체크
  //* 하나의 인덱스를 찍을때마다 각 테트로미노의 모든 경우의 수를 파악한다!

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (const line of TETROMINOES.LINE) {
        max = Math.max(max, checkWithCoordinates(i, j, line, board));
      }
      for (const el of TETROMINOES.L) {
        max = Math.max(max, checkWithCoordinates(i, j, el, board));
      }
      for (const box of TETROMINOES.BOX) {
        max = Math.max(max, checkWithCoordinates(i, j, box, board));
      }
      for (const stair of TETROMINOES.STAIR) {
        max = Math.max(max, checkWithCoordinates(i, j, stair, board));
      }
      for (const mountain of TETROMINOES.MOUNTAIN) {
        max = Math.max(max, checkWithCoordinates(i, j, mountain, board));
      }
    }
  }

  return max;
}
