//* 10026. 적록색약
//* ⭕️ 통과
//* 완전탐색

//* 1 <= N <= 100

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

export default function redGreenColorWeakness(input: string) {
  const [rawN, ...rawPicture] = input.split("\n");
  const N = +rawN;
  const picture = rawPicture.map((v) => v.split(""));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const bfs = (targetY: number, targetX: number, term: string) => {
    if (visited[targetY][targetX] || picture[targetY][targetX] !== term) {
      return 0;
    }

    const queue = [[targetY, targetX]];

    while (queue.length) {
      const [currentY, currentX] = queue.shift();

      if (
        !visited[currentY][currentX] &&
        picture[currentY][currentX] === term
      ) {
        visited[currentY][currentX] = true;

        for (const [dy, dx] of directions) {
          const [my, mx] = [currentY + dy, currentX + dx];

          if (
            0 <= my &&
            0 <= mx &&
            my < N &&
            mx < N &&
            !visited[my][mx] &&
            picture[my][mx] === term
          ) {
            queue.push([my, mx]);
          }
        }
      }
    }
    return 1;
  };

  const answer = [];
  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      result += bfs(i, j, "R");
      result += bfs(i, j, "G");
      result += bfs(i, j, "B");
    }
  }

  answer.push(result);

  result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      visited[i][j] = false;
      if (picture[i][j] === "R") {
        picture[i][j] = "G";
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      result += bfs(i, j, "G");
      result += bfs(i, j, "B");
    }
  }

  answer.push(result);

  return answer.join(" ");
}
