import eatingRiceCakeTiger from "./2502";

const testCases = [
  {
    input: `6 41`,
    result: `2
7`,
  },
  {
    input: `7 218`,
    result: `10
21`,
  },
];

describe("2502. 떡 먹는 호랑이", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(eatingRiceCakeTiger(input)).toEqual(result))
  ));
