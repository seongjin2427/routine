import solution from "./2003";

describe("2003. 수들의 합 2", () => {
  it("case 1.", () => {
    const input = `4 2
1 1 1 1`;

    expect(solution(input)).toBe(3);
  });
  it("case 2.", () => {
    const input = `10 5
1 2 3 4 2 5 3 1 1 2`;

    expect(solution(input)).toBe(3);
  });
  it("case 3.", () => {
    const input = `10 5
5 2 1 5 1 1 1 1 1 1`;

    expect(solution(input)).toBe(4);
  });
});
