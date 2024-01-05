import solution from "./12914";

describe("12914. 멀리 뛰기", () => {
  it("case 1.", () => {
    const n = 4;
    expect(solution(n)).toBe(5);
  });
  it("case 5.", () => {
    const n = 3;
    expect(solution(n)).toBe(3);
  });
});
