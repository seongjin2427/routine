import jewelBox from "./2792";

const testCases = [
  {
    input: `5 2
7
4`,
    result: 3,
  },
  {
    input: `7 5
7
1
7
4
4`,
    result: 4,
  },
];

describe("2792. 보석상자", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(jewelBox(input)).toEqual(result))
  ));
