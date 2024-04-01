import sumBetweenTwoIntegers from "./12912";

const testCases = [
  {
    a: 3,
    b: 5,
    result: 12,
  },
  {
    a: 3,
    b: 3,
    result: 3,
  },
  {
    a: 5,
    b: 3,
    result: 12,
  },
];

describe("12912. 두 정수 사이의 합", () =>
  testCases.forEach(({ a, b, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(sumBetweenTwoIntegers(a, b)).toEqual(result))
  ));
