//* 43162. 네트워크
//* ⭕️ 통과
//* 완전탐색

//* 1 <= n <= 200

export default function networks(n: number, computers: number[][]) {
  let count = 0;
  const visited = new Array(n).fill(false);

  const bfs = (arr: number[]) => {
    const queue = [arr];
    count++;

    while (queue.length) {
      const target = queue.shift();

      target.forEach((element, index) => {
        if (element === 1 && !visited[index]) {
          visited[index] = true;
          queue.push(computers[index]);
        }
      });
    }
  };

  computers.forEach((computer, index) => {
    if (!visited[index]) bfs(computer);
  });

  return count;
}
