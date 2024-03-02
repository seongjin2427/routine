import markADot from "./140107";

describe("140107. 점 찍기", () => {
  it("case 1.", () => {
    const k = 2;
    const d = 4;

    expect(markADot(k, d)).toEqual(6);
  });
  it("case 2.", () => {
    const k = 1;
    const d = 5;

    expect(markADot(k, d)).toEqual(26);
  });
});
