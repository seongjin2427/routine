import solution from "./1057";

describe("1057. 토너먼트", () => {
  it("case 1.", () => {
    const input = `16 1 2`;
    expect(solution(input)).toEqual(1);
  });
  it("case 2.", () => {
    const input = `16 8 9`;
    expect(solution(input)).toEqual(4);
  });
  it("case 3.", () => {
    const input = `1000 20 31`;
    expect(solution(input)).toEqual(4);
  });
  it("case 4.", () => {
    const input = `65536 1000 35000`;
    expect(solution(input)).toEqual(16);
  });
  it("case 5.", () => {
    const input = `60000 101 891`;
    expect(solution(input)).toEqual(10);
  });
});
