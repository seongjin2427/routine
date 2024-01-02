// * ⭕️ 성공
// * 백트래킹

// depth가 M이 되면 탐색 중단
// N만큼 반복문으로 시작 (n,  depth)s

export default function solution(input: string) {
  const [N, M] = input.split(" ").map(Number);

  let answer = "";

  const dfs = (n: number, numbers: number[], depth: number) => {
    if (depth === M) {
      return (answer += `${numbers.join(" ").trim()}\n`);
    }

    for (let j = n; j <= N; j++) {
      numbers.push(j);
      dfs(j, numbers, depth + 1);
      numbers.pop();
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(i, [i], 1);
  }

  return answer.trim();
}
