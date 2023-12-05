import solution from "./15649";

describe("15649. N과 M (1)", () => {
  it("case 1. N: 3, M: 1", () => {
    const example = "3 1";
    const expected = `1
2
3`;
    expect(solution(example)).toBe(expected);
  });
  it("case 2. N: 4, M: 2", () => {
    const example = '4 2';
    const expected = `1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3`;
    expect(solution(example)).toBe(expected);
  });
  it("case 3. N: 4, M: 4", () => {
    const example = "4 4";
    const expected = `1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1`;
    expect(solution(example)).toBe(expected);
  });
});
