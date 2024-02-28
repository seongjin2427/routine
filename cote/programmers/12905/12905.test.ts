import findBiggestSquare from "./12905";

describe("12905. 가장 큰 정사각형 찾기", () => {
  it("case 1,", () => {
    const board = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ];

    expect(findBiggestSquare(board)).toEqual(9);
  });
  it("case 2,", () => {
    const board = [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ];

    expect(findBiggestSquare(board)).toEqual(4);
  });
});
