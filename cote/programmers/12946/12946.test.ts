import towerOfHanoi from "./12946";

describe("12946. 하노이의 탑", () => {
  it("case 1.", () => {
    const n = 2;

    expect(towerOfHanoi(n)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });
});
