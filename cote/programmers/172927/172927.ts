//* 172927. 광물 캐기
//* ❌ 실패
//* 그리디

//* 5 <= minerals.length <= 50

const fatigueTable = {
  diamond: { diamond: 1, iron: 1, stone: 1 },
  iron: { diamond: 5, iron: 1, stone: 1 },
  stone: { diamond: 25, iron: 5, stone: 1 },
};

const calculateFatigue = (
  minerals: string[],
  pickType: "diamond" | "iron" | "stone"
) =>
  minerals.reduce(
    (prevSum, mineral) => prevSum + fatigueTable[pickType][mineral],
    0
  );

export default function digMinerals(picks: number[], minerals: string[]) {
  const maxDigCounts = picks.reduce((a, b) => a + b, 0) * 5;
  if (maxDigCounts === 0) return 0;

  const digCases = [];
  const canDigMinerals = minerals.slice(0, maxDigCounts);

  for (let i = 0; i < canDigMinerals.length; i += 5) {
    const currentMinerals = canDigMinerals.slice(i, i + 5);
    digCases.push([
      calculateFatigue(currentMinerals, "diamond"),
      calculateFatigue(currentMinerals, "iron"),
      calculateFatigue(currentMinerals, "stone"),
    ]);
  }

  digCases.sort((a, b) => b[2] - a[2]);

  let result = 0;
  digCases.forEach((fatigues) => {
    for (let i = 0; i < picks.length; i++) {
      if (0 < picks[i]) {
        picks[i] -= 1;
        result += fatigues[i];
        break;
      }
    }
  });

  return result;
}
