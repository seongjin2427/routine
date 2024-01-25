import solution from "./10816";

describe("10816. 숫자 카드 2", () => {
  it("case 1.", () => {
    const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;
    expect(solution(input)).toEqual(`3 0 0 1 2 0 0 2`);
  });
});
