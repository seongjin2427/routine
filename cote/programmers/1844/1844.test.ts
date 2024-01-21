import solution from "./1844";

describe("1844. 게임 맵 최단거리", () => {
  it("case 1.", () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ];

    expect(solution(maps)).toEqual(11);
  });
  it("case 2.", () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ];

    expect(solution(maps)).toEqual(-1);
  });
});
