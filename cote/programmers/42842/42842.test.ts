import solution from "./42842";

describe("42842. 카펫", () => {
  it("case 1", () => {
    const brown = 10;
    const yellow = 2;

    expect(solution(brown, yellow)).toEqual([4, 3]);
  });
  it("case 2", () => {
    const brown = 8;
    const yellow = 1;

    expect(solution(brown, yellow)).toEqual([3, 3]);
  });
  it("case 3", () => {
    const brown = 24;
    const yellow = 24;

    expect(solution(brown, yellow)).toEqual([8, 6]);
  });
});
