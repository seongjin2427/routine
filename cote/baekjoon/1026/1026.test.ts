import solution from "./1026";

describe("1026. 보물", () => {
  it("case 1.", () => {
    const input = `5
1 1 1 6 0
2 7 8 3 1`;
    expect(solution(input)).toEqual(18);
  });
  it("case 2.", () => {
    const input = `3
1 1 3
10 30 20`;
    expect(solution(input)).toEqual(80);
  });
  it("case 3.", () => {
    const input = `9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1`;
    expect(solution(input)).toEqual(528);
  });
  it("case 4.", () => {
    const input = `3
1 2 3
1 1 1`;
    expect(solution(input)).toEqual(6);
  });
});
