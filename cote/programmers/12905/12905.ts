//* 12905. 가장 큰 정사각형 찾기
//* ❌ 실패
//* DP

//* row.length <= 1000
//* column.length <= 1000

export default function findBiggestSquare(board: number[][]) {
  let maxSquareSize = 0; // 가장 큰 정사각형의 변 길이 저장 변수

  // board의 행이나 열의 길이가 1인 경우, 최대 크기는 board 내 최대 값과 동일
  const range = Math.min(board.length, board[0].length);
  if (range < 2) {
    return 1;
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        // 현재 셀 기준으로 상단, 좌측, 상단 좌측 대각선 셀의 최소값 찾기
        let minNeighbor = Math.min(
          board[i - 1][j],
          board[i][j - 1],
          board[i - 1][j - 1]
        );
        // 현재 셀의 값을 갱신
        board[i][j] = minNeighbor + 1;
        // 가장 큰 정사각형의 변 길이 갱신
        maxSquareSize = Math.max(maxSquareSize, board[i][j]);
      }
    }
  }

  // 가장 큰 정사각형의 넓이 반환
  return maxSquareSize * maxSquareSize;
}
