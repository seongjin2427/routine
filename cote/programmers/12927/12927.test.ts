import overtimeIndex from "./12927";

describe("12927. 야근 지수", () => {
  it("case 1.", () => {
    const works = [4, 3, 3];
    const n = 4;

    expect(overtimeIndex(works, n)).toEqual(12);
  });
  it("case 2.", () => {
    const works = [2, 1, 2];
    const n = 1;

    expect(overtimeIndex(works, n)).toEqual(6);
  });
  it("case 3.", () => {
    const works = [1, 1];
    const n = 3;

    expect(overtimeIndex(works, n)).toEqual(0);
  });
});
