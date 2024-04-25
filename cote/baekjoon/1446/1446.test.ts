import shortcut from "./1446";

const testCases = [
  {
    input: `5 150
0 50 10
0 50 20
50 100 10
100 151 10
110 140 90`,
    result: 70,
  },
  {
    input: `2 100
10 60 40
50 90 20`,
    result: 80,
  },
  {
    input: `8 900
0 10 9
20 60 45
80 190 100
50 70 15
160 180 14
140 160 14
420 901 5
450 900 0`,
    result: 432,
  },
];

describe("1446. 지름길", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(shortcut(input)).toEqual(result))
  ));
