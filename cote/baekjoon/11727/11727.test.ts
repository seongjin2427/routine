import solution from "./11727";

describe("11727. 2xn 타일링 2", () => {
  it("case 1.", () => {
    const input = "2";

    expect(solution(input)).toEqual("3");
  });
  it("case 2.", () => {
    const input = "8";

    expect(solution(input)).toEqual("171");
  });
  it("case 3.", () => {
    const input = "12";

    expect(solution(input)).toEqual("2731");
  });
});
