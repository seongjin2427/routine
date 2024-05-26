import escapeTree from "./15900";

const testCases = [
  {
    input: `2
2 1`,
    result: "Yes",
  },
  {
    input: `4
1 2
2 3
2 4`,
    result: "No",
  },
  {
    input: `8
8 1
1 4
7 4
6 4
6 5
1 3
2 3`,
    result: "No",
  },
];

describe("15900. 나무 탈출", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(escapeTree(input)).toEqual(result))
  ));
