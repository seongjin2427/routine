// * 1018. 체스판 다시 칠하기
// * ❌ 실패
// * 브루트포스

// * 8 <= N, M <= 50

// * GPT 코드
export default function solution(input: string) {
  const [rawNM, ...rawBoard] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const BOARD_SIZE = 8;
  let answer = Infinity;

  const getChangeCount = (
    board: string[],
    startRow: number,
    startCol: number,
    startColor: number
  ) => {
    let count = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // * 행, 열이 바뀔 때마다 'B', 'W'를 변경해야 하기 때문에 (i + j) % 2로 구함
        const expectedColor = (i + j) % 2 === startColor ? "B" : "W";
        if (board[startRow + i][startCol + j] !== expectedColor) {
          count++;
        }
      }
    }
    return count;
  };

  for (let i = 0; i <= N - BOARD_SIZE; i++) {
    for (let j = 0; j <= M - BOARD_SIZE; j++) {
      const count1 = getChangeCount(rawBoard, i, j, 0); // Start with 'B'
      const count2 = getChangeCount(rawBoard, i, j, 1); // Start with 'W'
      answer = Math.min(answer, count1, count2);
    }
  }

  return answer === Infinity ? 0 : answer;
}

// ! 실패 코드
// export default function solution(input: string) {
//   const [rawNM, ...rawBoard] = input.split("\n");
//   const [N, M] = rawNM.split(" ").map((v) => +v);
//   const BOARD_SIZE = 8;
//   let answer = Infinity;

//   const getChangeCountInBoard = (board: string[]) => {
//     let count = 0;
//     let firstColor = board[0][0];

//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[0].length; j++) {
//         const targetColor = board[i][j];
//         if (targetColor !== firstColor) count++;
//         firstColor = firstColor === "B" ? "W" : "B";
//       }
//       firstColor = firstColor === "B" ? "W" : "B";
//     }

//     return count;
//   };

//   for (let i = 0; i <= N - BOARD_SIZE; i++) {
//     for (let j = 0; j <= M - BOARD_SIZE; j++) {
//       const targetBoard = rawBoard
//         .slice(i, i + BOARD_SIZE)
//         .map((col) => col.slice(j, j + BOARD_SIZE));
//       const countToChange = getChangeCountInBoard(targetBoard);
//       answer = answer > countToChange ? countToChange : answer;
//     }
//   }

//   return answer === Infinity ? 0 : answer;
// }
