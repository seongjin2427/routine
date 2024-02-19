//* 86971. 전력망을 둘로 나누기
//* ⭕️ 통과
//* 완전탐색

//* 2 <= n <= 100
//* wires.length === n - 1
//* wires[i] === [v1, v2]
//* 1 <= v1 < v2 <= n

function betterSolution(n: number, wires: number[][]) {
  const tree = Array.from({ length: n }, () => []);
  for (const [v1, v2] of wires) {
    tree[v1 - 1].push(v2 - 1);
    tree[v2 - 1].push(v1 - 1);
  }

  const visited = new Array(n).fill(-1);
  const queue = [0];

  for (let i = 0; i < queue.length; ++i) {
    const target = queue[i];
    for (const next of tree[target])
      if (next != visited[target]) {
        visited[next] = target;
        queue.push(next);
      }
  }

  let answer = n;
  const dp = new Array(n).fill(1);
  for (let i = queue.length; i > 0; --i) {
    const target = queue[i];
    const difference = Math.abs(n - 2 * dp[target]);

    dp[visited[target]] += dp[target];
    if (answer > difference) answer = difference;
  }

  return answer;
}

const disconnectTree = (
  tree: { [key: string]: number[] },
  v1: number,
  v2: number
) => {
  const copiedTree = { ...tree };
  copiedTree[v1] = copiedTree[v1].filter((next) => next !== v2);
  copiedTree[v2] = copiedTree[v2].filter((next) => next !== v1);
  return copiedTree;
};

const bfs = (
  start: number,
  visited: boolean[],
  targetTree: { [key: string]: number[] }
) => {
  const queue = [start];
  let towerCount = 0;

  while (queue.length) {
    const currentTower = queue.shift();
    const nextTowers = targetTree[currentTower];

    if (visited[currentTower] === false) {
      visited[currentTower] = true;
      towerCount += 1;

      for (const nextTower of nextTowers) {
        queue.push(nextTower);
      }
    }
  }

  return towerCount;
};

export default function divideTwoElectricalGrid(n: number, wires: number[][]) {
  const tree = {};
  let minDiferrence = Infinity;

  wires.forEach(([v1, v2]) => {
    tree[v1] ? tree[v1].push(v2) : (tree[v1] = [v2]);
    tree[v2] ? tree[v2].push(v1) : (tree[v2] = [v1]);
  });

  for (const [v1, v2] of wires) {
    const visited = new Array(n + 1).fill(false);
    const disconnectedTree = disconnectTree(tree, v1, v2);

    const v1TowerCount = bfs(v1, visited, disconnectedTree);
    const v2TowerCount = bfs(v2, visited, disconnectedTree);

    minDiferrence = Math.min(
      minDiferrence,
      Math.abs(v1TowerCount - v2TowerCount)
    );
  }

  return minDiferrence;
}
