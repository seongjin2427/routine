import travelDesertIsland from "./154540";

describe("154540. 무인도 여행", () => {
  it("case 1.", () => {
    const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];
    expect(travelDesertIsland(maps)).toEqual([1, 1, 27]);
  });
  it("case 2.", () => {
    const maps = ["XXX", "XXX", "XXX"];
    expect(travelDesertIsland(maps)).toEqual([-1]);
  });
});
