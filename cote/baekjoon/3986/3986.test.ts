import solution from "./3986";

describe("3986. 좋은 단어", () => {
  it("case 1.", () => {
    const input = `3
ABAB
AABB
ABBA`;

    expect(solution(input)).toEqual(2);
  });
  it("case 2.", () => {
    const input = `3
AAA
AA
AB`;

    expect(solution(input)).toEqual(1);
  });
  it("case 3.", () => {
    const input = `1
ABBABB`;

    expect(solution(input)).toEqual(1);
  });
});
