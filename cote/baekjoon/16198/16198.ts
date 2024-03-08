//* 16198. 에너지 모으기
//* ⭕️ 통과
//* 브루트포스

//* 3 <= N <= 10
//* 1 <= W[i] <= 1_000

export default function gatheringEnergy(input: string) {
  const [rawN, rawEnergy] = input.split("\n");
  const N = Number(rawN);
  const energy = rawEnergy.split(" ").map(Number);

  let max = 0;

  const dfs = (
    current: number,
    total: number,
    target: number[],
    depth: number
  ) => {
    if (depth === N - 2) {
      return;
    }

    const nextTotal = total + target[current - 1] * target[current + 1];
    const nextEnergyTarget = [
      ...target.slice(0, current),
      ...target.slice(current + 1),
    ];

    max = Math.max(max, nextTotal);

    for (let next = 1; next < nextEnergyTarget.length - 1; next++) {
      dfs(next, nextTotal, nextEnergyTarget, depth + 1);
    }
  };

  for (let i = 1; i < N - 1; i++) {
    dfs(i, 0, energy, 0);
  }

  return max;
}

function GPTSolution(input: string) {
  const [rawN, rawEnergy] = input.split("\n");
  const N = Number(rawN);
  const energy = rawEnergy.split(" ").map(Number);

  // 에너지를 모으는 과정을 재귀적으로 구현한 함수
  function collectEnergy(remainingWeights: number[], totalEnergy: number) {
    if (remainingWeights.length === 2) {
      // 더 이상 에너지를 모을 수 없을 때 최대 에너지 반환
      return totalEnergy;
    }

    let maxEnergy = 0;
    for (let i = 1; i < remainingWeights.length - 1; i++) {
      // i번째 에너지 구슬을 선택해 제거하고, 양옆 구슬의 무게를 곱하여 에너지 얻기
      const energyGained = remainingWeights[i - 1] * remainingWeights[i + 1];
      // 선택한 구슬을 제외하고 새로운 배열 생성
      const newWeights = [
        ...remainingWeights.slice(0, i),
        ...remainingWeights.slice(i + 1),
      ];
      // 재귀 호출을 통해 다음 단계의 최대 에너지 계산
      const energy = collectEnergy(newWeights, totalEnergy + energyGained);
      // 최대 에너지 갱신
      maxEnergy = Math.max(maxEnergy, energy);
    }
    return maxEnergy;
  }

  return collectEnergy(energy, 0);
}
