import digMinerals from "./172927";

const testCases = [
  {
    picks: [1, 3, 2],
    minerals: [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ],
    result: 12,
  },
  {
    picks: [0, 1, 1],
    minerals: [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ],
    result: 50,
  },
  {
    picks: [1, 1, 0],
    minerals: [
      "stone",
      "stone",
      "iron",
      "stone",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
    ],
    result: 14,
  },
];

describe("172927. 광물 캐기", () =>
  testCases.forEach(({ picks, minerals, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(digMinerals(picks, minerals)).toEqual(result))
  ));
