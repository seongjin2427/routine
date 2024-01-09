import solution from "./1021";

describe("1021. 회전하는 큐", () => {
  it("case 1.", () => {
    const input = `10 3
1 2 3`;
    expect(solution(input)).toBe(0);
  });
  it("case 2.", () => {
    const input = `10 3
2 9 5`;
    expect(solution(input)).toBe(8);
  });
  it("case 3.", () => {
    const input = `32 6
27 16 30 11 6 23`;
    expect(solution(input)).toBe(59);
  });
  it("case 4.", () => {
    const input = `10 10
1 6 3 2 7 9 8 4 10 5`;
    expect(solution(input)).toBe(14);
  });
});
