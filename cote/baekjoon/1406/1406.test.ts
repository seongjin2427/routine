import solution from "./1406";

describe("1406. 에디터", () => {
  it("case 1. abcd", () => {
    const input = `abcd
3
P x
L
P y`;
    expect(solution(input)).toBe("abcdyx");
  });
  it("case 2. abc", () => {
    const input = `abc
9
L
L
L
L
L
P x
L
B
P y`;
    expect(solution(input)).toBe("yxabc");
  });
  it("case 3. dmih", () => {
    const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;
    expect(solution(input)).toBe("yxz");
  });
});
