import solution from "./11399";

describe("11399. ATM", () => {
  it("case 1.", () => {
    const input = `5
3 1 4 3 2`;
    expect(solution(input)).toBe(32);
  });
});
