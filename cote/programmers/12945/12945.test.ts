import solution from "./12945";

describe("12945. 피보나치 수", () => {
  it("case 1.", () => {
    const n = 3;
    expect(solution(n)).toEqual(2);
  });
  it("case 2.", () => {
    const n = 5;
    expect(solution(n)).toEqual(5);
  });
});
