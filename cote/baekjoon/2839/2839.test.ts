import solution from "./2839";

describe("2839. 설탕 배달", () => {
  it("case 1.", () => {
    const input = 18;
    expect(solution(input)).toBe(4);
  });
  it("case 2.", () => {
    const input = 4;
    expect(solution(input)).toBe(-1);
  });
  it("case 3.", () => {
    const input = 6;
    expect(solution(input)).toBe(2);
  });
  it("case 4.", () => {
    const input = 9;
    expect(solution(input)).toBe(3);
  });
  it("case 5.", () => {
    const input = 11;
    expect(solution(input)).toBe(3);
  });
});
