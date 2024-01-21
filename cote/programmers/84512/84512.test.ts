import solution from "./84512";

describe("84512. 모음 사전", () => {
  it("case 1", () => {
    const word = "AAAAE";
    expect(solution(word)).toEqual(6);
  });
  it("case 2", () => {
    const word = "AAAE";
    expect(solution(word)).toEqual(10);
  });
  it("case 3", () => {
    const word = "I";
    expect(solution(word)).toEqual(1563);
  });
  it("case 4", () => {
    const word = "EIO";
    expect(solution(word)).toEqual(1189);
  });
});
