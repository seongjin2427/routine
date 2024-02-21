import easyStairsCount from "./10844";

describe("10844. 쉬운 계단 수", () => {
  it("case 1.", () => {
    const input = "1";
    expect(easyStairsCount(input)).toEqual(9);
  });
  it("case 2.", () => {
    const input = "2";
    expect(easyStairsCount(input)).toEqual(17);
  });
});
