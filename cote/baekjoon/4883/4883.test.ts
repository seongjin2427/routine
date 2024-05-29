import tryGraph from "./4883";

const testCases = [
  {
    input: `4
13 7 5
7 13 6
14 3 12
15 6 16
0`,
    result: "1. 22",
  },
];

describe("4883. 삼각 그래프", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(tryGraph(input)).toEqual(result))
  ));
