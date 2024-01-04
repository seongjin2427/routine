import solution from "./12953";

describe("12953. N개의 최소공배수", () => {
  it("case 1.", () => {
    const arr = [2, 6, 8, 14];

    expect(solution(arr)).toBe(168);
  });
  it("case 2.", () => {
    const arr = [1, 2, 3];

    expect(solution(arr)).toBe(6);
  });
});
