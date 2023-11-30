import solution from "./12939";

describe(`12939. 최댓값과 최솟값, '주어진 s에 대해 "(최대값) (최소값)" 형태의 문자열을 반환합니다.`, () => {
  it("case 1. 정수가 오름차 순으로 있을 때F", () => {
    const s = "1 2 3 4";
    expect(solution(s)).toBe("1 4");
  });
  it("case 2. 음수 값만 있을 때", () => {
    const s = "-1 -2 -3 -4";
    expect(solution(s)).toBe("-4 -1");
  });
  it("case 3. 동일한 음수 값만 있을 때", () => {
    const s = "-1 -1";
    expect(solution(s)).toBe("-1 -1");
  });
  it("case 4. 순서와 정수, 음수 관계 없이 있을 때", () => {
    const s = "-1 5 3 -1";
    expect(solution(s)).toBe("-1 5");
  });
});
