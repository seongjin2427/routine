//* 2239. 스도쿠
//* ❌ 실패
//* 구현

const isDuplicateInRowColumn = (
  board: number[][],
  y: number,
  x: number,
  target: number
) => {
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === target || board[i][x] === target) return true;
  }
  return false;
};

const isDuplicateInBox = (
  board: number[][],
  y: number,
  x: number,
  target: number
) => {
  const dy = Math.floor(y / 3) * 3;
  const dx = Math.floor(x / 3) * 3;

  for (let i = dy; i < 3 + dy; i++) {
    for (let j = dx; j < 3 + dx; j++) {
      if (board[i][j] === target) return true;
    }
  }

  return false;
};

export default function sudoku(input: string) {
  const board = input.split("\n").map((row) => row.split("").map(Number));

  const dfs = (board: number[][], depth: number) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] > 0) continue;
        for (let k = 1; k <= 9; k++) {
          if (isDuplicateInRowColumn(board, i, j, k)) continue;
          if (isDuplicateInBox(board, i, j, k)) continue;

          board[i][j] = k;
          if (dfs(board, depth + 1)) return true;
          board[i][j] = 0;
        }
        return false;
      }
    }
    return true;
  };

  dfs(board, 0);

  return board.map((row) => row.join("")).join("\n");
}
