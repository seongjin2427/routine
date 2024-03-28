import hotel from "./1106";

const testCases = [
  {
    input: `12 2
3 5
1 1`,
    result: 8,
  },
  {
    input: `10 3
3 1
2 2
1 3`,
    result: 4,
  },
  {
    input: `10 10
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10`,
    result: 10,
  },
  {
    input: `100 6
4 9
9 11
3 4
8 7
1 2
9 8`,
    result: 45,
  },
];

describe("1106. 호텔", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(hotel(input)).toEqual(result))
  ));
