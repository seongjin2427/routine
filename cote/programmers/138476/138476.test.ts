import solution from "./138476";

describe("138476. 귤 고르기", () => {
  it("case 1.", () => {
    const k = 6;
    const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
    expect(solution(k, tangerine)).toBe(3);
  });
  it("case 2.", () => {
    const k = 4;
    const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
    expect(solution(k, tangerine)).toBe(2);
  });
  it("case 3.", () => {
    const k = 2;
    const tangerine = [1, 1, 1, 1, 2, 2, 2, 3];
    expect(solution(k, tangerine)).toBe(1);
  });
});
