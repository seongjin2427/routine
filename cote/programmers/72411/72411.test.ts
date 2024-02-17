import solution from "./72411";

describe("72411. 메뉴 리뉴얼", () => {
  it("case 1.", () => {
    const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
    const course = [2, 3, 4];

    expect(solution(orders, course)).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  });
  it("case 2.", () => {
    const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
    const course = [2, 3, 5];

    expect(solution(orders, course)).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
  });
  it("case 1.", () => {
    const orders = ["XYZ", "XWY", "WXA"];
    const course = [2, 3, 4];

    expect(solution(orders, course)).toEqual(["WX", "XY"]);
  });
});
