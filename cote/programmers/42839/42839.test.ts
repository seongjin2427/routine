import solution from "./42839";

describe("42839. 소수 찾기", () => {
  it("case 1.", () => {
    const number = "17";
    expect(solution(number)).toEqual(3);
  });
  it("case 2.", () => {
    const number = "011";
    expect(solution(number)).toEqual(2);
  });
});
