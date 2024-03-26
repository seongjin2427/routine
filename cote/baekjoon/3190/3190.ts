//* 3190. 뱀
//* ❌ 실패
//* 구현

//* 2 <= N <= 100
//* 0 <= K <= 100
//* 0 <= L <= 100

export default function snake(input: string) {
  const [rawN, rawK, ...lines] = input.split("\n");
  const [N, K] = [+rawN, +rawK];
  const apples = lines.slice(0, K).map((a) => a.split(" ").map(Number));
  const L = +lines[K];
  const directions: [number, string][] = lines
    .slice(K + 1)
    .map((d) => d.split(" "))
    .map(([x, c]) => [+x, c]);

  let board = Array.from(Array(N), () => Array(N).fill(0));
  let time = 0,
    direction = 0; // 0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위
  let snake = [[0, 0]]; // 뱀의 몸통 위치 (행, 열)
  board[0][0] = 2; // 뱀의 시작 위치
  apples.forEach(([y, x]) => (board[y - 1][x - 1] = 1)); // 사과 위치 설정
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  for (let i = 0; i <= L; i++) {
    let nextTime = i < L ? directions[i][0] : 10000; // 마지막 방향 변환 후 무한히 진행 가능
    while (time < nextTime) {
      time++;
      let nx = snake[0][0] + dx[direction];
      let ny = snake[0][1] + dy[direction];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N || board[nx][ny] === 2) {
        return time; // 벽이나 자기자신과 부딪히면 게임 종료
      }
      if (board[nx][ny] === 1) {
        // 사과가 있는 경우
        board[nx][ny] = 0; // 사과 먹기
      } else {
        // 사과가 없는 경우
        let tail = snake.pop(); // 꼬리 이동
        board[tail[0]][tail[1]] = 0;
      }
      snake.unshift([nx, ny]); // 머리 이동
      board[nx][ny] = 2;
    }
    if (i < L) {
      direction = (direction + (directions[i][1] === "D" ? 1 : 3)) % 4; // 방향 전환
    }
  }
  return time; // 게임 종료 시간 반환
}
