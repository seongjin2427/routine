import solution from "./1213";

describe("1213. 팰린드롬 만들기", () => {
  it("case 1.", () => {
    const input = "AABB";
    expect(solution(input)).toEqual("ABBA");
  });
  it("case 2.", () => {
    const input = "AAABB";
    expect(solution(input)).toEqual("ABABA");
  });
  it("case 3.", () => {
    const input = "ABACABA";
    expect(solution(input)).toEqual("AABCBAA");
  });
  it("case 4.", () => {
    const input = "ABCD";
    expect(solution(input)).toEqual("I'm Sorry Hansoo");
  });
  it("case 5.", () => {
    const input = "ABCDDDABC";
    expect(solution(input)).toEqual("ABCDDDCBA");
  });
});
