import solution from "./12980";

describe("12980. 점프와 순간이동", () => {
  it("case 1.", () => {
    const N = 5;

    expect(solution(N)).toEqual(2);
  });
  it("case 2.", () => {
    const N = 6;

    expect(solution(N)).toEqual(2);
  });
  it("case 3.", () => {
    const N = 5000;

    expect(solution(N)).toEqual(5);
  });
});
