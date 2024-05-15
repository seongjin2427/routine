import notShrink from "./2688";

const testCases = [
  {
    input: `3
2
3
4`,
    result: `55
220
715`,
  },
];

describe("2688. 줄어들지 않아", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(notShrink(input)).toEqual(result))
  ));
