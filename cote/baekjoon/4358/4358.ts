//* 4358. 생태학
//* ⭕️ 통과
//* 문자열, 해시

//* 종 <= 10_000
//* 나무 <= 1_000_000

export default function ecology(input: string) {
  const trees = input.split("\n");
  const species = {};

  trees.forEach((tree) => {
    species[tree] ? species[tree]++ : (species[tree] = 1);
  });

  const speciesCount = trees.length;

  return (Object.entries(species) as [string, number][])
    .map(
      ([species, count]) =>
        `${species} ${((count / speciesCount) * 100).toFixed(4)}`
    )
    .sort()
    .join("\n");
}
