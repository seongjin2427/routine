// ! 시간초과
// ❌
// 참고: https://kimbangg.tistory.com/207

export default function solution(input: string) {
  let answer = "";
  const [N, M] = input.split(" ").map(Number);
  const visited = new Array(M + 1).fill(0);
  const output = [];

  const dfs = (n: number) => {
    if (n === M) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i] === 1) continue;

      visited[i] = 1;
      output.push(i);
      dfs(n + 1);

      output.pop();
      visited[i] = 0;
    }
  };

  dfs(0);

  return answer.trim();
}
