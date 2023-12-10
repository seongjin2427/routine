import solution from "./12909";

describe("12909. 올바른 괄호", () => {
  it('case 1. "()()"', () => {
    const s = "()()";
    expect(solution(s)).toBe(true);
  });
  it('case 2. "(())()"', () => {
    const s = "(())()";
    expect(solution(s)).toBe(true);
  });
  it('case 3. ")()("', () => {
    const s = ")()(";
    expect(solution(s)).toBe(false);
  });
  it('case 4. "(()("', () => {
    const s = "(()(";
    expect(solution(s)).toBe(false);
  });
});
