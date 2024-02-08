import solution from "./42883";

describe("42883. 큰 수 만들기", () => {
  it("case 1.", () => {
    const number = "1924";
    const k = 2;
    expect(solution(number, k)).toEqual("94");
  });
  it("case 2.", () => {
    const number = "1231234";
    const k = 3;
    expect(solution(number, k)).toEqual("3234");
  });
  it("case 3.", () => {
    const number = "4177252841";
    const k = 4;
    expect(solution(number, k)).toEqual("775841");
  });
});
