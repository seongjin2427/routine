import solution from "./12981";

describe("12981. 영어 끝말잇기", () => {
  it("case 1.", () => {
    const n = 3;
    const words = [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ];
    expect(solution(n, words)).toEqual([3, 3]);
  });
  it("case 2.", () => {
    const n = 5;
    const words = [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ];
    expect(solution(n, words)).toEqual([0, 0]);
  });
  it("case 3.", () => {
    const n = 2;
    const words = ["hello", "one", "even", "never", "now", "world", "draw"];
    expect(solution(n, words)).toEqual([1, 3]);
  });
});
