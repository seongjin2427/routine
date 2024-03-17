//* 1025. 제곱수 찾기
//* ❌ 실패
//* 브루트포스

//* 1 <= N, M <= 9

function isPerfectSquare(num: number) {
  const root = Math.sqrt(num);
  return root === Math.floor(root);
}

export default function findSquareNumber(input: string) {
  const [rawNM, ...board] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);

  let maxSquare = -1;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      for (let dx = -N; dx < N; dx++) {
        for (let dy = -M; dy < M; dy++) {
          if (dx === 0 && dy === 0) continue;

          let num = "";
          let [i, j] = [x, y];

          while (i >= 0 && i < N && j >= 0 && j < M) {
            num += board[i][j];

            const currentNum = Number(num);
            if (isPerfectSquare(currentNum)) {
              maxSquare = Math.max(maxSquare, currentNum);
            }
            i += dx;
            j += dy;
          }
        }
      }
    }
  }

  return maxSquare;
}
