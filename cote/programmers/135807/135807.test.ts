import divideNumberCards from "./135807";

describe("135807. 숫자 카드 나누기", () => {
  it("case 1.", () => {
    const arrayA = [10, 17];
    const arrayB = [5, 20];
    expect(divideNumberCards(arrayA, arrayB)).toEqual(0);
  });
  it("case 2.", () => {
    const arrayA = [10, 20];
    const arrayB = [5, 17];
    expect(divideNumberCards(arrayA, arrayB)).toEqual(10);
  });
  it("case 3.", () => {
    const arrayA = [14, 35, 119];
    const arrayB = [18, 30, 102];
    expect(divideNumberCards(arrayA, arrayB)).toEqual(7);
  });
});
