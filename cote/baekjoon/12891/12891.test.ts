import DNAPassword from "./12891";

const testCases = [
  {
    input: `9 8
CCTGGATTG
2 0 1 1`,
    result: 0,
  },
  {
    input: `4 2
GATA
1 0 0 1`,
    result: 2,
  },
  {
    input: `2 2
AC
1 1 0 0`,
    result: 1,
  },
  {
    input: `11 4
AAACCTGCCAA
1 1 1 0`,
    result: 1,
  },
];

describe("12891. DNA 비밀번호", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(DNAPassword(input)).toEqual(result))
  ));
