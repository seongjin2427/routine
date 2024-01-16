import solution from "./3085";

describe("3085. 사탕 게임", () => {
  it("case 1.", () => {
    const input = `3
CCP
CCP
PPC`;

    expect(solution(input)).toEqual(3);
  });
  it("case 2.", () => {
    const input = `4
PPPP
CYZY
CCPY
PPCC`;

    expect(solution(input)).toEqual(4);
  });
  it("case 3.", () => {
    const input = `5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`;

    expect(solution(input)).toEqual(4);
  });
});
