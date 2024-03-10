import NQueen from "./9663";

const testCases = [{ n: "8", result: 92 }];

describe("9663. NQueen", () => {
  testCases.forEach(({ n, result }, index) =>
    it(`case ${index + 1}.`, () => expect(NQueen(n)).toBe(result))
  );
});
