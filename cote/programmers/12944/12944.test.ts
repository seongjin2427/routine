import getAverage from "./12944";

const testCases = [
  {
    arr: [1, 2, 3, 4],
    result: 2.5,
  },
  {
    arr: [5, 5],
    result: 5,
  },
];

describe("12944. 평균 구하기", () =>
  testCases.forEach(({ arr, result }, index) =>
    it(`case ${index + 1}.`, () => expect(getAverage(arr)).toEqual(result))
  ));
