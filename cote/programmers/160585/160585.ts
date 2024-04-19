//* 160585. 혼자서 하는 틱택토
//* ❌ 실패
//* 구현

//* board.length, board[i].length === 3

export default function tictactoeAlone(board: string[]) {
  // 보드를 분석하기 쉬운 형태로 변환
  const lines = board.map((row) => row.split(""));
  let countO = 0;
  let countX = 0;

  // 각각의 행, 열, 대각선을 확인하기 위한 준비
  let winsO = 0;
  let winsX = 0;
  let cols = [[], [], []];
  let diag1 = [];
  let diag2 = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let char = lines[i][j];
      if (char === "O") countO++;
      if (char === "X") countX++;
      cols[j].push(char);
      if (i === j) diag1.push(char);
      if (i + j === 2) diag2.push(char);
    }

    // 행 검사
    if (lines[i].every((c) => c === "O")) winsO++;
    if (lines[i].every((c) => c === "X")) winsX++;
  }

  // 열과 대각선 검사
  [cols, [diag1], [diag2]].flat().forEach((line) => {
    if (line.every((c) => c === "O")) winsO++;
    if (line.every((c) => c === "X")) winsX++;
  });

  // 게임 룰 검증
  if (countO < countX || countO > countX + 1) return 0; // O와 X의 수가 틀림
  if (winsO > 0 && winsX > 0) return 0; // 동시에 두 플레이어가 승리할 수 없음
  if (winsO > 0 && countO === countX) return 0; // O가 승리했을 때 O의 수가 X와 같으면 안 됨
  if (winsX > 0 && countO > countX) return 0; // X가 승리했을 때 O의 수가 더 많으면 안 됨
  return 1; // 위 조건에 걸리지 않으면 정상적인 게임판
}
