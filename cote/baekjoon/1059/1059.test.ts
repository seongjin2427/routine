import solution from "./1059";

describe("1059. 좋은 구간", () => {
  it("case 1.", () => {
    const input = `4
1 7 14 10
2`;
    expect(solution(input)).toEqual(4);
  });
  it("case 2.", () => {
    const input = `5
4 8 13 24 30
10`;
    expect(solution(input)).toEqual(5);
  });
  it("case 3.", () => {
    const input = `5
10 20 30 40 50
30`;
    expect(solution(input)).toEqual(0);
  });
  it("case 4.", () => {
    const input = `8
3 7 12 18 25 100 33 1000
59`;
    expect(solution(input)).toEqual(1065);
  });
});
