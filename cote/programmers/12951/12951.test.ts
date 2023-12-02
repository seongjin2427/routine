import solution from "./12951";

describe("12951. JadenCase 문자열 만들기", () => {
  it("case 1.", () => {
    const s = "3people unFollowed me";
    expect(solution(s)).toBe("3people Unfollowed Me");
  });
  it("case 2.", () => {
    const s = "for the last week";
    expect(solution(s)).toBe("For The Last Week");
  });
});
