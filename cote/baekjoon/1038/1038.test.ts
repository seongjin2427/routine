import decreasingNumber from "./1038";

const testCases = [
  { N: 18, result: 42 },
  { N: 0, result: 0 },
  { N: 500_000, result: -1 },
];

describe("1038. 감소하는 수", () => {
  testCases.forEach(({ N, result }, index) =>
    it(`case ${index + 1}.`, () => expect(decreasingNumber(N)).toEqual(result))
  );
});
