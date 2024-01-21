import solution from "./11478";

describe("11478. 서로 다른 부분 문자열의 개수", () => {
  it("case 1.", () => {
    const input = "ababc";
    expect(solution(input)).toEqual(12);
  });
});
