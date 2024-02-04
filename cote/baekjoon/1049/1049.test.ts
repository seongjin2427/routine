import solution from "./1049";

describe("1049. 기타줄", () => {
  it("case 1.", () => {
    const input = `4 2
12 3
15 4`;
    expect(solution(input)).toEqual(12);
  });
  it("case 2.", () => {
    const input = `10 3
20 8
40 7
60 4`;
    expect(solution(input)).toEqual(36);
  });
  it("case 3.", () => {
    const input = `15 1
100 40`;
    expect(solution(input)).toEqual(300);
  });
  it("case 4.", () => {
    const input = `17 1
12 3`;
    expect(solution(input)).toEqual(36);
  });
  it("case 5.", () => {
    const input = `7 2
10 3
12 2`;
    expect(solution(input)).toEqual(12);
  });
  it("case 6.", () => {
    const input = `9 16
21 25
77 23
23 88
95 43
96 19
59 36
80 13
51 24
15 8
25 61
21 22
3 9
68 68
67 100
83 98
96 57`;
    expect(solution(input)).toEqual(6);
  });
});
