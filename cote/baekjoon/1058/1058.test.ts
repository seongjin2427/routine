import friends from "./1058";

const testCases = [
  {
    input: `3
NYY
YNY
YYN`,
    result: 2,
  },
  {
    input: `3
NNN
NNN
NNN`,
    result: 0,
  },
  {
    input: `5
NYNNN
YNYNN
NYNYN
NNYNY
NNNYN`,
    result: 4,
  },
  {
    input: `10
NNNNYNNNNN
NNNNYNYYNN
NNNYYYNNNN
NNYNNNNNNN
YYYNNNNNNY
NNYNNNNNYN
NYNNNNNYNN
NYNNNNYNNN
NNNNNYNNNN
NNNNYNNNNN`,
    result: 8,
  },
  {
    input: `15
NNNNNNNNNNNNNNY
NNNNNNNNNNNNNNN
NNNNNNNYNNNNNNN
NNNNNNNYNNNNNNY
NNNNNNNNNNNNNNY
NNNNNNNNYNNNNNN
NNNNNNNNNNNNNNN
NNYYNNNNNNNNNNN
NNNNNYNNNNNYNNN
NNNNNNNNNNNNNNY
NNNNNNNNNNNNNNN
NNNNNNNNYNNNNNN
NNNNNNNNNNNNNNN
NNNNNNNNNNNNNNN
YNNYYNNNNYNNNNN`,
    result: 6,
  },
];

describe("1058. 친구", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(friends(input)).toEqual(result))
  ));
