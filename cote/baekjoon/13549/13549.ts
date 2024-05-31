//* 13549. 숨바꼭질 3
//* ❌ 실패
//* 너비 우선 탐색, 다익스트라, 최단 경로

//* 0 <= N <= 100_000
//* 0 <= K <= 100_000

export default function hideAndSeek3(input: string) {
  const [N, K] = input.split(" ").map(Number);
  const visit = Array.from({ length: 100_100 }, () => 0);

  function bfs(N: number) {
    const queue = [];
    queue.push([N, 0]);
    visit[N] = 1;

    while (queue.length) {
      const [cur, time] = queue.shift();

      if (cur === K) return time;

      for (const next of [cur * 2, cur - 1, cur + 1]) {
        if (!visit[next] && next >= 0 && next <= 100_000) {
          visit[next] = 1;

          if (next == cur * 2) {
            // 2X로 이동할 때는 시간을 증가시키지 않고, 우선순위를 반영하여 큐의 맨 앞에 넣어준다.
            queue.unshift([next, time]);
          } else {
            // X-1, X+1로 이동할 때는 시간을 증가시키고, 큐에 순서대로 넣어준다.
            queue.push([next, time + 1]);
          }
        }
      }
    }
  }
  return bfs(N);
}
