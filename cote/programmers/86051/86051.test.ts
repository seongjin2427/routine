import sumNumbersOfNotExisted from "./86051";

const testCases = [
  {
    numbers: [1, 2, 3, 4, 6, 7, 8, 0],
    result: 14,
  },
  {
    numbers: [5, 8, 4, 0, 6, 7, 9],
    result: 6,
  },
];

describe("86051. 없는 숫자 더하기", () =>
  testCases.forEach(({ numbers, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(sumNumbersOfNotExisted(numbers)).toEqual(result))
  ));
