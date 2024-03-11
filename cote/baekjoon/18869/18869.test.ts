import multibus2 from "./18869";

const testCases = [
  {
    input: `2 3
1 3 2
12 50 31`,
    result: 1,
  },
  {
    input: `2 3
1 3 2
12 50 10`,
    result: 0,
  },
  {
    input: `5 3
20 10 30
10 20 60
80 25 79
30 50 80
80 25 81`,
    result: 2,
  },
];

describe("18869. 멀티버스2", () => {
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(multibus2(input)).toBe(result))
  );
});
