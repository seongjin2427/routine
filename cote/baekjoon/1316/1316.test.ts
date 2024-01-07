import solution from "./1316";

describe("1316. 셀프 넘버", () => {
  it("case 1.", () => {
    const input = `3
happy
new
year`;
    expect(solution(input)).toBe(3);
  });
  it("case 2.", () => {
    const input = `4
aba
abab
abcabc
a`;
    expect(solution(input)).toBe(1);
  });
  it("case 3.", () => {
    const input = `5
ab
aa
aca
ba
bb`;
    expect(solution(input)).toBe(4);
  });
  it("case 4.", () => {
    const input = `2
yzyzy
zyzyz`;
    expect(solution(input)).toBe(0);
  });
  it("case 5.", () => {
    const input = `1
z`;
    expect(solution(input)).toBe(1);
  });
  it("case 6.", () => {
    const input = `9
aaa
aaazbz
babb
aazz
azbz
aabbaa
abacc
aba
zzaz`;
    expect(solution(input)).toBe(2);
  });
});
