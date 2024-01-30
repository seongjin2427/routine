import solution from "./135808";

describe("135808. 과일 장수", () => {
  it("case 1.", () => {
    const k = 3;
    const m = 4;
    const score = [1, 2, 3, 1, 2, 3, 1];
    expect(solution(k, m, score)).toEqual(8);
  });
  it("case 2.", () => {
    const k = 4;
    const m = 3;
    const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
    expect(solution(k, m, score)).toEqual(33);
  });
});
