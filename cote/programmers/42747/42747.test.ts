import solution from "./42747";

describe("42747. H-Index", () => {
  it("case 1.", () => {
    const citations = [3, 0, 6, 1, 5];
    expect(solution(citations)).toEqual(3);
  });
  it("case 1.", () => {
    const citations = [0, 0, 0, 0, 0];
    expect(solution(citations)).toEqual(0);
  });
});
