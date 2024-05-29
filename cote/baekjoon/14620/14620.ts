//* 14620. 꽃길
//* ❌ 실패
//* 브루트포스

//* 6 <= N <= 10
//* 0 <= G <= 200

const DIRECTIONS = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const isValidPosition = (y: number, x: number, N: number) => {
  return y > 0 && y < N - 1 && x > 0 && x < N - 1;
};

const calculateCost = (garden: number[][], y: number, x: number) => {
  let cost = 0;
  for (const [dy, dx] of DIRECTIONS) {
    cost += garden[y + dy][x + dx];
  }
  return cost;
};

const isNonOverlapping = (p1: number[], p2: number[], p3: number[]) => {
  const positions = new Set();
  for (const [dy, dx] of DIRECTIONS) {
    positions.add(`${p1[0] + dy},${p1[1] + dx}`);
    positions.add(`${p2[0] + dy},${p2[1] + dx}`);
    positions.add(`${p3[0] + dy},${p3[1] + dx}`);
  }
  return positions.size === 15;
};

export default function roadOfFlower(input: string) {
  const [rawN, ...rawGarden] = input.split("\n");
  const N = +rawN;
  const garden = rawGarden.map((g) => g.split(" ").map((v) => +v));

  let minCost = Infinity;

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      for (let k = 1; k < N - 1; k++) {
        for (let l = 1; l < N - 1; l++) {
          for (let m = 1; m < N - 1; m++) {
            for (let n = 1; n < N - 1; n++) {
              const flower1 = [i, j];
              const flower2 = [k, l];
              const flower3 = [m, n];

              if (
                isValidPosition(i, j, N) &&
                isValidPosition(k, l, N) &&
                isValidPosition(m, n, N)
              ) {
                if (isNonOverlapping(flower1, flower2, flower3)) {
                  const cost =
                    calculateCost(garden, i, j) +
                    calculateCost(garden, k, l) +
                    calculateCost(garden, m, n);
                  minCost = Math.min(minCost, cost);
                }
              }
            }
          }
        }
      }
    }
  }

  return minCost;
}
