import billiardsPractice from "./169198";

describe("169198. 당구 연습", () => {
  it("case 1.", () => {
    const m = 10;
    const n = 10;
    const startX = 3;
    const startY = 7;
    const balls = [
      [7, 7],
      [2, 7],
      [7, 3],
    ];

    expect(billiardsPractice(m, n, startX, startY, balls)).toEqual([
      52, 37, 116,
    ]);
  });
});
