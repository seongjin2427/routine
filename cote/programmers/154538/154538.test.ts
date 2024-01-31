import solution from "./154538";

describe("154538. 숫자 변환하기", () => {
  it("case 1.", () => {
    const x = 10;
    const y = 40;
    const n = 5;

    expect(solution(x, y, n)).toEqual(2);
  });
  it("case 2.", () => {
    const x = 10;
    const y = 40;
    const n = 30;

    expect(solution(x, y, n)).toEqual(1);
  });
  it("case 3.", () => {
    const x = 2;
    const y = 5;
    const n = 4;

    expect(solution(x, y, n)).toEqual(-1);
  });
});
