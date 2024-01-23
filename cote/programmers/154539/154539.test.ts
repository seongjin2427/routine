import solution from "./154539";

describe("154539. 뒤에 있는 큰 수 찾기", () => {
  it("case 1.", () => {
    const numbers = [2, 3, 3, 5];

    expect(solution(numbers)).toEqual([3, 5, 5, -1]);
  });
  it("case e.", () => {
    const numbers = [9, 1, 5, 3, 6, 2];

    expect(solution(numbers)).toEqual([-1, 5, 6, 6, -1, -1]);
  });
});
