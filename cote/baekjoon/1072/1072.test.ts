import solution from "./1072";

describe("1072. 게임", () => {
  it("case 1.", () => {
    const input = "10 8";
    expect(solution(input)).toEqual(1);
  });
  it("case 2.", () => {
    const input = "100 80";
    expect(solution(input)).toEqual(6);
  });
  it("case 3.", () => {
    const input = "47 47";
    expect(solution(input)).toEqual(-1);
  });
  it("case 4.", () => {
    const input = "99000 0";
    expect(solution(input)).toEqual(1000);
  });
  it("case 5.", () => {
    const input = "1000000000 470000000";
    expect(solution(input)).toEqual(19230770);
  });
});
