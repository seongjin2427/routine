import solution from "./11055";

describe("11055. 가장 큰 증가하는 부분 수열", () => {
  it("case 1", () => {
    const input = `10
1 100 2 50 60 3 5 6 7 8`;
    expect(solution(input)).toBe(113);
  });
  it("case 2", () => {
    const input = `5
3 10 2 1 20`;
    expect(solution(input)).toBe(33);
  });
});
