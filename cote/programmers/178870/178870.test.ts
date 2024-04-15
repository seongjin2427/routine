import solution from "./178870";

describe("178870. 연속된 부분 수열의 합", () => {
  it("case 1.", () => {
    const sequence = [1, 2, 3, 4, 5];
    const k = 7;

    expect(solution(sequence, k)).toEqual([2, 3]);
  });
  it("case 2.", () => {
    const sequence = [1, 1, 1, 2, 3, 4, 5];
    const k = 5;

    expect(solution(sequence, k)).toEqual([6, 6]);
  });
  it("case 3.", () => {
    const sequence = [2, 2, 2, 2, 2];
    const k = 6;

    expect(solution(sequence, k)).toEqual([0, 2]);
  });
});

