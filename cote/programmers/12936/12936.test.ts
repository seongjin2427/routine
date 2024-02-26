import lineupWays from "./12936";

describe("12936. 줄 서는 방법", () => {
  it("case 1.", () => {
    const n = 3;
    const k = 5;
    expect(lineupWays(n, k)).toEqual([3, 1, 2]);
  });
});
