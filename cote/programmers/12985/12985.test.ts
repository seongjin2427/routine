import solution from "./12985";

describe("12985. 예상 대진표", () => {
  it("case 1.", () => {
    const N = 8;
    const A = 4;
    const B = 7;

    expect(solution(N, A, B)).toBe(3);
  });
});
