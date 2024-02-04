import solution from "./42746";

describe("42746. 가장 큰 수", () => {
  it("case 1.", () => {
    const numbers = [6, 10, 2];
    expect(solution(numbers)).toEqual("6210");
  });
  it("case 2.", () => {
    const numbers = [3, 30, 34, 5, 9];
    expect(solution(numbers)).toEqual("9534330");
  });
  it("case 3.", () => {
    const numbers = [0, 0, 0];
    expect(solution(numbers)).toEqual("0");
  });
});
