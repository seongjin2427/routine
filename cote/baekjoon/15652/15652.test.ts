import solution from "./15652";

describe("15652. N과 M (4)", () => {
  it("case 1.", () => {
    const input = `3 1`;
    expect(solution(input)).toBe(`1
2
3`);
  });
  it("case 2.", () => {
    const input = `4 2`;
    expect(solution(input)).toBe(`1 1
1 2
1 3
1 4
2 2
2 3
2 4
3 3
3 4
4 4`);
  });
  it("case 3.", () => {
    const input = `3 3`;
    expect(solution(input)).toBe(`1 1 1
1 1 2
1 1 3
1 2 2
1 2 3
1 3 3
2 2 2
2 2 3
2 3 3
3 3 3`);
  });
});
