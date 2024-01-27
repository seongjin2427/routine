import solution from "./49993";

describe("49993. 스킬트리", () => {
  it("case 1.", () => {
    const skill = "CBD";
    const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

    expect(solution(skill, skill_trees)).toEqual(2);
  });
});
