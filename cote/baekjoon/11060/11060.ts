//* 11060. 점프 점프
//*
//* DP

//* 1 <= N <= 1_000
//* 0 <= A[i] <= 100

export default function jumgJump(input: string) {
  const [rawN, rawMaze] = input.split("\n");
  const N = Number(rawN);
  const maze = rawMaze.split(" ").map(Number);

  const dp = new Array(N).fill(Infinity);
  dp[0] = 0;

  for (let current = 0; current < N; current++) {
    //* current: 현재 위치
    //* next: 현재 위치에서 점프할 수 있는 위치들 (범위: 현재위치 + 점프 가능한 거리 && 미로의 길이)
    //* 현재 기준(current)으로 점프할 수 있는 위치마다 점프 횟수를 할당한 뒤에,
    //* 이전에 할당받은 횟수와 current에 도달했을 때 중 더 작은 값을 dp에 할당합니다.
    //* 그럼 항상 각 위치에 도달할 수 있는 최소 횟수를 얻을 수 있습니다.
    for (let next = current; next <= current + maze[current] && next < N; next++) {
      dp[next] = Math.min(dp[current] + 1, dp[next]);
    }
  }

  if (dp.at(-1) === Infinity) {
    return -1;
  }

  return dp.at(-1);
}

//* 작은 문제: n칸에 왔을 때, n칸에 i가 써있다면 1~i칸을 선택해서 이동한다.
//* i = 0: 1
//* [1] -> [0, 1]
//* i = 1: 2
//* [2] -> [0, 1, 2, 2]
//* i = 2: 1
//* [1] -> [0, 1, 2, 2, 3]
//* i = 3: 3
//* [3] -> [0, 1, 2, 2, 3, 4, 4, 4]
