import solution from "./12941";

describe("12941. 최솟값 만들기", () => {
  it("case 1. 겹치는 숫자가 있는 경우", () => {
    const A = [1, 4, 2];
    const B = [5, 4, 4];
    expect(solution(A, B)).toBe(29);
  });
  it("case 2. 겹치는 숫자가 없는 경우", () => {
    const A = [1, 2];
    const B = [3, 4];
    expect(solution(A, B)).toBe(10);
  });
});
