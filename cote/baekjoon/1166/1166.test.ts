import solution from "./1166";

describe("1166. 선물", () => {
  it("case 1 .", () => {
    const input = `10 4 2 10`;
    expect(solution(input)).toEqual(2.0);
  });
  it("case 2 .", () => {
    const input = `2 2 2 2`;
    expect(solution(input)).toEqual(1.0);
  });
  it("case 3 .", () => {
    const input = `1 12 47 5`;
    expect(solution(input)).toEqual(5.0);
  });
  it("case 4 .", () => {
    const input = `77 146 523 229`;
    expect(solution(input)).toEqual(52.300000000000004);
  });
});
