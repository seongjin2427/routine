import solution from "./42584";

describe("42584. 주식가격", () => {
  it("case 1.", () => {
    const prices = [1, 2, 3, 2, 3];
    expect(solution(prices)).toEqual([4, 3, 1, 1, 0]);
  });
});
