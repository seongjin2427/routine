import solution from "./13305";

describe("13305. 주유소", () => {
  it("case 1.", () => {
    const input = `4
2 3 1
5 2 4 1`;
    expect(solution(input)).toEqual(18);
  });
  it("case 2.", () => {
    const input = `4
3 3 4
1 1 1 1`;
    expect(solution(input)).toEqual(10);
  });
  it("case 3.", () => {
    const input = `4
3 3 4
1 2 3 1`;
    expect(solution(input)).toEqual(10);
  });
});
