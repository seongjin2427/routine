import solution from "./43165";

describe("43165. 타겟 넘버", () => {
  it("case 1.", () => {
    const numbers = [1, 1, 1, 1, 1];
    const target = 3;

    expect(solution(numbers, target)).toEqual(5);
  });
  it("case 2.", () => {
    const numbers = [4, 1, 2, 1];
    const target = 4;

    expect(solution(numbers, target)).toEqual(2);
  });
});
