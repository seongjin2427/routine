import solution from "./1431";

describe("1431. 시리얼 번호", () => {
  it("case 1.", () => {
    const input = `5
ABCD
145C
A
A910
Z321`;

    expect(solution(input)).toEqual(`A
ABCD
Z321
145C
A910`);
  });
  it("case 2.", () => {
    const input = `2
Z19
Z20`;

    expect(solution(input)).toEqual(`Z20
Z19`);
  });
  it("case 3.", () => {
    const input = `4
34H2BJS6N
PIM12MD7RCOLWW09
PYF1J14TF
FIPJOTEA5`;

    expect(solution(input)).toEqual(`FIPJOTEA5
PYF1J14TF
34H2BJS6N
PIM12MD7RCOLWW09`);
  });
  it("case 4.", () => {
    const input = `5
ABCDE
BCDEF
ABCDA
BAAAA
ACAAA`;

    expect(solution(input)).toEqual(`ABCDA
ABCDE
ACAAA
BAAAA
BCDEF`);
  });
});
