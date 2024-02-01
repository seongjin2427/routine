import solution from "./1051";

describe("1051. 숫자 정사각형", () => {
  it("case 1.", () => {
    const input = `3 5
42101
22100
22101`;
    expect(solution(input)).toEqual(9);
  });
  it("case 2.", () => {
    const input = `2 2
12
34`;
    expect(solution(input)).toEqual(1);
  });
  it("case 3.", () => {
    const input = `2 4
1255
3455`;
    expect(solution(input)).toEqual(4);
  });
  it("case 4.", () => {
    const input = `1 10
1234567890`;
    expect(solution(input)).toEqual(1);
  });
  it("case 5.", () => {
    const input = `11 10
9785409507
2055103694
0861396761
3073207669
1233049493
2300248968
9769239548
7984130001
1670020095
8894239889
4053971072`;
    expect(solution(input)).toEqual(49);
  });
});
