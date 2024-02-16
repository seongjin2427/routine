import solution from "./12899";

describe("12899. 124 나라의 숫자", () => {
  it("case 1.", () => {
    const n = 1;
    expect(solution(n)).toEqual(1);
  });
  it("case 2.", () => {
    const n = 2;
    expect(solution(n)).toEqual(2);
  });
  it("case 3.", () => {
    const n = 3;
    expect(solution(n)).toEqual(4);
  });
  it("case 4.", () => {
    const n = 4;
    expect(solution(n)).toEqual(11);
  });
  it("case 5.", () => {
    const n = 9;
    expect(solution(n)).toEqual(24);
  });
});
