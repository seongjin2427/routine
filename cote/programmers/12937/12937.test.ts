import evenAndOdd from "./12937";

const testCases = [
  {
    num: 3,
    result: "Odd",
  },
  {
    num: 4,
    result: "Even",
  },
];

describe("12937. 짝수와 홀수", () =>
  testCases.forEach(({ num, result }, index) =>
    it(`case ${index + 1}.`, () => expect(evenAndOdd(num)).toEqual(result))
  ));
