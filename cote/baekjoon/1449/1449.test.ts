import solution from "./1449";

describe("1449. 수리공 항승", () => {
  it("case 1.", () => {
    const input = `4 2
1 2 100 101`;
    expect(solution(input)).toEqual(2);
  });
  it("case 2.", () => {
    const input = `4 3
1 2 3 4`;
    expect(solution(input)).toEqual(2);
  });
  it("case 3.", () => {
    const input = `3 1
3 2 1`;
    expect(solution(input)).toEqual(3);
  });
  it("case 4.", () => {
    const input = `5 3
1 3 4 6 8`;
    expect(solution(input)).toEqual(3);
  });
});
