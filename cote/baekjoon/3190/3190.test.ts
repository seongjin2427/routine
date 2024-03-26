import snake from "./3190";

const testCases = [
  {
    input: `6
3
3 4
2 5
5 3
3
3 D
15 L
17 D`,
    result: 9,
  },
  {
    input: `10
4
1 2
1 3
1 4
1 5
4
8 D
10 D
11 D
13 L`,
    result: 21,
  },
  {
    input: `10
5
1 5
1 3
1 2
1 6
1 7
4
8 D
10 D
11 D
13 L`,
    result: 13,
  },
];

describe("3190. 뱀", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(snake(input)).toEqual(result))
  ));
