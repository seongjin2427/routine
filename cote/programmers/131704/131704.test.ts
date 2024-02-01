import solution from "./131704";

describe("131704. 택배상자", () => {
  it("case 1.", () => {
    const order = [4, 3, 1, 2, 5];
    expect(solution(order)).toEqual(2);
  });
  it("case 2.", () => {
    const order = [5, 4, 3, 2, 1];
    expect(solution(order)).toEqual(5);
  });
});
