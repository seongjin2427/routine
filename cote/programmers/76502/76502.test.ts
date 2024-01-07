import solution from "./76502";

describe("76502. 괄호 회전하기", () => {
  it("case 1.", () => {
    const s = "[](){}";
    expect(solution(s)).toBe(3);
  });
  it("case 2.", () => {
    const s = "}]()[{";
    expect(solution(s)).toBe(2);
  });
  it("case 3.", () => {
    const s = "[)(]";
    expect(solution(s)).toBe(0);
  });
  it("case 4.", () => {
    const s = "}}}";
    expect(solution(s)).toBe(0);
  });
});
