import solution from "./131701";

describe("131701. 연속 부분 수열 합의 개수", () => {
  it("case 1.", () => {
    const elements = [7, 9, 1, 1, 4];
    expect(solution(elements)).toBe(18);
  });
});
