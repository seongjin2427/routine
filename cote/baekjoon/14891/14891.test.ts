import gears from "./14891";

const testCases = [
  {
    input: `10101111
01111101
11001110
00000010
2
3 -1
1 1`,
    result: 7,
  },
  {
    input: `11111111
11111111
11111111
11111111
3
1 1
2 1
3 1`,
    result: 15,
  },
  {
    input: `10001011
10000011
01011011
00111101
5
1 1
2 1
3 1
4 1
1 -1`,
    result: 6,
  },
  {
    input: `10010011
01010011
11100011
01010101
8
1 1
2 1
3 1
4 1
1 -1
2 -1
3 -1
4 -1`,
    result: 5,
  },
];

describe("14891. 톱니바퀴", () => {
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(gears(input)).toEqual(result))
  );
});
