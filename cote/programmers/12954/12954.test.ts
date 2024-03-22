import numbersHasXGap from "./12954";

const testCases = [
  { x: 2, n: 5, result: [2, 4, 6, 8, 10] },
  { x: 4, n: 3, result: [4, 8, 12] },
  { x: -4, n: 2, result: [-4, -8] },
];

describe("12954. x만큼 간격이 있는 n개의 숫자", () =>
  testCases.forEach(({ x, n, result }, index) =>
    it(`case ${index + 1}.`, () => expect(numbersHasXGap(x, n)).toEqual(result))
  ));
