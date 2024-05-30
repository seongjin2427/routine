//* 15565.  귀여운 라이언
//* ❌ 실패
//* 투 포인터

//* 1 <= K <= N <= 1_000_000

export default function cuteLion(input: string) {
  const [rawNK, rawDolls] = input.split("\n");
  const [N, K] = rawNK.split(" ").map((v) => +v);
  const dolls = rawDolls.split(" ").map((v) => +v);

  let count = 0;
  let minCount = Infinity;
  let i = 0;
  let j = 0;

  while (j < N) {
    if (dolls[j] === 1) {
      count++;
    }

    while (count === K) {
      if (dolls[i] === 1) {
        count--;
      }
      minCount = Math.min(minCount, j - i + 1);
      i++;
    }

    j++;
  }

  return minCount === Infinity ? -1 : minCount;
}
