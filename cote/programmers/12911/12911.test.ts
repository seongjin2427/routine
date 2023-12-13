import solution from "./12911";

describe("12911. 다음 큰 숫자", () => {
  it("case 1.", () => {
    const n = 78;
    expect(solution(n)).toEqual(83);
  });
  it("case 2.", () => {
    const n = 15;
    expect(solution(n)).toEqual(23);
  });
});
