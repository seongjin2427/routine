import solution from "./14425";

describe("14425. 문자열 집합", () => {
  it("case 1.", () => {
    const input = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`;

    expect(solution(input)).toEqual(4);
  });
});
