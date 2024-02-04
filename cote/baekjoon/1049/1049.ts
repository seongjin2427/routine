// * 1049. 기타줄
// * ⭕️ 통과
// * 그리디

// * N <= 100
// * M <= 50

export default function solution(input: string) {
  const [rawNM, ...rawStrings] = input.split("\n");
  const [N, M] = rawNM.split(" ").map((v) => +v);
  const strings = rawStrings.map((string) => string.split(" ").map((v) => +v));

  const minPackage = Math.min(...strings.map((string) => string[0]));
  const minOne = Math.min(...strings.map((string) => string[1]));

  const needToStringCount = N;
  const ceilPackageCount = Math.ceil(needToStringCount / 6);
  const floorPackageCount = Math.floor(needToStringCount / 6);

  const onlyPackagesExpenses = ceilPackageCount * minPackage;
  const packagesAndOnesExpenses =
    floorPackageCount * minPackage +
    (needToStringCount - floorPackageCount * 6) * minOne;
  const onlyOnesExpenses = needToStringCount * minOne;

  return Math.min(
    onlyPackagesExpenses,
    packagesAndOnesExpenses,
    onlyOnesExpenses
  );
}
