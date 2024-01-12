// * 13305. 주유소
// * ❌ 실패
// * 그리디

// * 2 <= N <= 100_000
// * 1 <= 총 거리, 리터당 가격 <= 1_000_000_000

export default function solution(input: string) {
  const [rawN, rawRoads, rawCities] = input.split("\n");
  const N = +rawN;
  const roads = rawRoads.split(" ").map((v) => +v);
  const cities = rawCities.split(" ").map((v) => +v);

  let current = cities[0];
  let cost = 0;

  for (let i = 0; i < N - 1; i++) {
    cost += current * roads[i];
    if (current > cities[i + 1]) current = cities[i + 1];
  }

  return cost;
}
