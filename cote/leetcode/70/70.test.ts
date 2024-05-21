import climbingStairs from "./70";

const testCases = [
  {
    n: 2,
    result: 2,
  },
  {
    n: 3,
    result: 3,
  },
];

describe("70. Climbing Stairs", () =>
  testCases.forEach(({ n, result }, index) =>
    it(`case ${index + 1}.`, () => expect(climbingStairs(n)).toEqual(result))
  ));
