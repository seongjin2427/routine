import solution from "./1541";

describe("1541. 잃어버린 괄호", () => {
  it("case 1. 일반 케이스 1: 부호가 다름", () => {
    const input = "55-50+40";
    expect(solution(input)).toBe(-35);
  });
  it("case 2. 일반 케이스 2: 부호가 모두 동일함", () => {
    const input = "10+20+30+40";
    expect(solution(input)).toBe(100);
  });
  it("case 3. 0으로 시작하는 숫자 포함", () => {
    const input = "00009-00009";
    expect(solution(input)).toBe(0);
  });
});
