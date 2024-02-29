//* 2138. 전구와 스위치
//* ❌ 실패
//* 그리디

//* 2 <= N <= 100_000
//* 불가능 하다면 -1 출력

//* N번 스위치를 누르면 N-1, N번 상태가 바뀐다.

export default function bulbAndSwitch(input: string) {
  const [rawN, ...bulbs] = input.split("\n");
  const n = Number(rawN);
  let [currentConfig, targetConfig] = bulbs.map((bulb) =>
    bulb.split("").map(Number)
  );

  const flipSwitch = (idx: number, config: number[]) => {
    [idx - 1, idx, idx + 1].forEach((i) => {
      if (i >= 0 && i < n) config[i] = 1 - config[i];
    });
  };

  const simulateFlips = (flipFirst: boolean) => {
    let config = [...currentConfig];
    let flips = 0;
    if (flipFirst) {
      flipSwitch(0, config);
      flips++;
    }
    for (let i = 1; i < n; i++) {
      if (config[i - 1] !== targetConfig[i - 1]) {
        flipSwitch(i, config);
        flips++;
      }
    }
    return JSON.stringify(config) === JSON.stringify(targetConfig)
      ? flips
      : Number.MAX_SAFE_INTEGER;
  };

  const minFlipsWithFirstFlip = simulateFlips(true);
  const minFlipsWithoutFirstFlip = simulateFlips(false);
  const minFlips = Math.min(minFlipsWithFirstFlip, minFlipsWithoutFirstFlip);

  return minFlips === Number.MAX_SAFE_INTEGER ? -1 : minFlips;
}
