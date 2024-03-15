import numberGame from "./12987";

const testCases = [
  {
    A: [5, 1, 3, 7],
    B: [2, 2, 6, 8],
    result: 3,
  },
  {
    A: [2, 2, 2, 2],
    B: [1, 1, 1, 1],
    result: 0,
  },
];

describe("12987. 숫자 게임", () => {
  testCases.forEach(({ A, B, result }, index) =>
    it(`case ${index + 1}.`, () => expect(numberGame(A, B)).toEqual(result))
  );
});
