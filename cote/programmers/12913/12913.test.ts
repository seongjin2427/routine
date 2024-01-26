import solution from "./12913";

describe("12913. 땅따먹기", () => {
  it("case 1.", () => {
    const land = [
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ];
    expect(solution(land)).toEqual(16);
  });
});
