//* 169199. 리코쳇 로봇
//* ❌ 실패
//* 완전탐색

//* 3 <= board.length <= 100
//* 3 <= board[i].length <= 100

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]; // 상, 하, 좌, 우

export default function richochetRobot(board: string[]) {
  const height = board.length;
  const width = board[0].length;
  const visited = Array.from(Array(height), () => Array(width).fill(false));
  const queue = [];
  let start, goal;

  // 시작 위치와 목표 위치 찾기
  board.forEach((row, r) => {
    row.split("").forEach((cell, c) => {
      if (cell === "R") start = [r, c];
      if (cell === "G") goal = [r, c];
    });
  });

  // BFS 시작
  queue.push([...start, 0]); // [row, col, moves]
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [row, col, moves] = queue.shift();

    // 목표 도달 시
    if (row === goal[0] && col === goal[1]) return moves;

    for (let [dr, dc] of directions) {
      let [nRow, nCol, nMoves] = [row, col, moves];

      // 장애물이나 벽에 부딪힐 때까지 이동
      while (true) {
        nRow += dr;
        nCol += dc;
        if (
          nRow < 0 ||
          nRow >= height ||
          nCol < 0 ||
          nCol >= width ||
          board[nRow][nCol] === "D"
        ) {
          nRow -= dr;
          nCol -= dc;
          break;
        }
        if (visited[nRow][nCol]) break; // 이미 방문한 위치면 중단
      }

      if (!visited[nRow][nCol] && !(nRow === row && nCol === col)) {
        visited[nRow][nCol] = true;
        queue.push([nRow, nCol, nMoves + 1]);
      }
    }
  }

  return -1; // 목표에 도달할 수 없는 경우
}
