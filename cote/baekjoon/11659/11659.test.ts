import solution from "./11659";

describe("11659. 구간 합 구하기 4", () => {
  it("case 1", () => {
    const input = `5 3
5 4 3 2 1
1 3
2 4
5 5`;

    expect(solution(input)).toBe(`12
9
1`);
  });
});
