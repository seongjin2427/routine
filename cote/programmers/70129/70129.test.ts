import solution from "./70129";

describe("70129. 이진 변환 반복하기", () => {
  it("case 1.", () => {
    const s = "110010101001";
    expect(solution(s)).toEqual([3, 8]);
  });
  it("case 2.", () => {
    const s = "01110";
    expect(solution(s)).toEqual([3, 3]);
  });
  it("case 3.", () => {
    const s = "1111111";
    expect(solution(s)).toEqual([4, 1]);
  });
});
