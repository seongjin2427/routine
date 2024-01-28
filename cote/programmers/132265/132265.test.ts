import solution from "./132265";

describe("132265. 롤케이크 자르기", () => {
  it("case 1.", () => {
    const topping = [1, 2, 1, 3, 1, 4, 1, 2];
    expect(solution(topping)).toEqual(2);
  });
  it("case 2.", () => {
    const topping = [1, 2, 3, 1, 4];
    expect(solution(topping)).toEqual(0);
  });
});
