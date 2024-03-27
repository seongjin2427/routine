import sortDescWithIntegers from "./12933";

describe("118372. 정수 내림차순으로 배치하기", () => {
  it("case 1.", () => {
    const n = "118372";

    expect(sortDescWithIntegers(n)).toEqual(873211);
  });
});
