import solution from "./16928";

describe("16928. 뱀과 사다리 게임", () => {
  it("case 1.", () => {
    const input = `3 7
32 62
42 68
12 98
95 13
97 25
93 37
79 27
75 19
49 47
67 17`;
    expect(solution(input)).toEqual(3);
  });
  it("case 2.", () => {
    const input = `4 9
8 52
6 80
26 42
2 72
51 19
39 11
37 29
81 3
59 5
79 23
53 7
43 33
77 21`;
    expect(solution(input)).toEqual(5);
  });
  it("case 3.", () => {
    const input = `1 1
2 99
10 2`;
    expect(solution(input)).toEqual(2);
  });
  it("case 4.", () => {
    const input = `3 3
2 50
4 51
15 99
52 14
80 60
77 45`;
    expect(solution(input)).toEqual(4);
  });
});
