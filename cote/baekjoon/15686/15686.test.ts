import chickenDelivery from "./15686";

const testCases = [
  {
    input: `5 3
0 0 1 0 0
0 0 2 0 1
0 1 2 0 0
0 0 1 0 0
0 0 0 0 2`,
    result: 5,
  },
  {
    input: `5 2
0 2 0 1 0
1 0 1 0 0
0 0 0 0 0
2 0 0 1 1
2 2 0 1 2`,
    result: 10,
  },
  {
    input: `5 1
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0`,
    result: 11,
  },
  {
    input: `5 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1`,
    result: 32,
  },
];

describe("15686. 치킨 배달", () => {
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(chickenDelivery(input)).toBe(result))
  );
});
