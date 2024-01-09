import solution from "./87390";

describe("87390. n^2 배열 자르기", () => {
  it("case 1", () => {
    const n = 3,
      left = 2,
      right = 5;
    expect(solution(n, left, right)).toEqual([3, 2, 2, 3]);
  });
  it("case 2", () => {
    const n = 4,
      left = 7,
      right = 14;
    expect(solution(n, left, right)).toEqual([4, 3, 3, 3, 4, 4, 4, 4]);
  });
});
