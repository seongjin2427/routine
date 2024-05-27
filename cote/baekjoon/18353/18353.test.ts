import arrangeSoldier from "./18353";

const testCases = [
  {
    input: `7
15 11 4 8 5 2 4`,
    result: 2,
  },
];

describe("18353. 병사 배치하기", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(arrangeSoldier(input)).toEqual(result))
  ));
