import solution from "./12973";

describe("12973. 짝지어 제거하기", () => {
  it("case 1.", () => {
    const s = "baabaa";

    expect(solution(s)).toEqual(1);
  });
  it("case 2.", () => {
    const s = "cdcd";

    expect(solution(s)).toEqual(0);
  });
});
