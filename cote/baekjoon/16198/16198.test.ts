import gatheringEnergy from "./16198";

const testCases = [
  {
    input: `4
1 2 3 4`,
    result: 12,
  },
  {
    input: `5
100 2 1 3 100`,
    result: 10400,
  },
  {
    input: `7
2 2 7 6 90 5 9`,
    result: 1818,
  },
  {
    input: `10
1 1 1 1 1 1 1 1 1 1`,
    result: 8,
  },
];

describe("16198. 에너지 모으기", () => {
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(gatheringEnergy(input)).toBe(result))
  );
});
