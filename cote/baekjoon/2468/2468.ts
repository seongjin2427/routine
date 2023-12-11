// ❌
// 못 풀었음 ㅠㅠ...
// 참고 블로그: https://tesseractjh.tistory.com/188

// 전형적인 완전탐색 문제
// N을 1부터 100까지 순회하면서 (강수량이 1~100이라면)
// 독립적인 공간을 띄는 개수가 가장 큰 경우의 수를 반환하면 된다.
// 2 <= N 100
// 1 <= height <= 100

export default function solution(input: string) {
  const [N, ...heights] = input.split("\n");
  // 2차원 숫자 배열로 변환
  const areas = heights.map((v) => v.split(" ").map((v) => +v));

  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (y: number, x: number, visited: boolean[][]) => {
    for (const move of moves) {
      const [dy, dx] = move;
      const [my, mx] = [dy + y, dx + x];

      if (mx >= 0 && mx < +N && my >= 0 && my < +N && !visited[my][mx]) {
        visited[my][mx] = true;
        dfs(my, mx, visited);
      }
    }
  };

  let answer = 0;
  for (let height = 0; height <= 100; height++) {
    let count = 0;
    const visited = [...Array(+N)].map((_, x) =>
      [...Array(+N)].map((_, y) => areas[x][y] <= height)
    );

    for (let i = 0; i < +N; i++) {
      for (let j = 0; j < +N; j++) {
        if (!visited[i][j]) {
          visited[i][j] = true;
          dfs(i, j, visited);
          count++;
        }
      }
    }
    answer = answer > count ? answer : count;
  }

  return answer;
}
