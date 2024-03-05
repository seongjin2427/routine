//* 16987. 계란으로 계란치기
//*
//* 브루트포스, 백트래킹

//* 1 <= N <= 8
//* 1 <= S[i] <= 300
//* 1 <= W[i] <= 300

export default function eggHitsEgg(input: string) {
  const [rawN, ...rawEggs] = input.split("\n");
  const N = Number(rawN);
  const eggs = rawEggs.map((egg) => egg.split(" ").map(Number));
  let max = 0;

  const dfs = (current: number) => {
    if (current === N) {
      const count = eggs.filter((egg) => egg[0] <= 0).length;
      max = Math.max(max, count);
      return;
    }

    const [currentEnergy, currentWeight] = eggs[current];

    let flag = true;
    for (let next = 0; next < N; next++) {
      if (next !== current) {
        const [nextEnergy, nextWeight] = eggs[next];

        if (0 < currentEnergy && 0 < nextEnergy) {
          flag = false;
          eggs[current] = [currentEnergy - nextWeight, currentWeight];
          eggs[next] = [nextEnergy - currentWeight, nextWeight];

          dfs(current + 1);

          eggs[current] = [currentEnergy, currentWeight];
          eggs[next] = [nextEnergy, nextWeight];
        }
      }
    }

    if (flag) dfs(current + 1);
  };

  dfs(0);

  return max;
}
