import solution from "./1541";

describe("1541. 잃어버린 괄호", () => {
  it("case 1. 뺄셈이 먼저 나오는 경우", () => {
    const input = "55-50+40";

    expect(solution(input)).toEqual(-35);
  });
  it("case 2. 덧셈만 있는 경우", () => {
    const input = "10+20+30+40";

    expect(solution(input)).toEqual(100);
  });
  it("case 3. 0부터 시작하지만, 연산되는 값은 0이 아닌 경우", () => {
    const input = "00009-00009";

    expect(solution(input)).toEqual(0);
  });
  it("case 4. 뺄셈이 나중에 나오는 경우", () => {
    const input = "55+50-40";

    expect(solution(input)).toEqual(65);
  });
});
