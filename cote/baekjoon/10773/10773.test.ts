import solution from "./10773";

describe("10773. 제로", () => {
  it("case 1.", () => {
    const input = `4
3
0
4
0`;

    expect(solution(input)).toEqual(0);
  });
  it("case 2.", () => {
    const input = `10
1
3
5
4
0
0
7
0
0
6`;

    expect(solution(input)).toEqual(7);
  });
});
