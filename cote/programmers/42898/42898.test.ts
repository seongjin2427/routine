import wayToSchool from "./42898";

const testCases = [{ m: 4, n: 3, puddles: [[2, 2]], result: 4 }];

describe("42898. 등굣길", () => {
  testCases.forEach(({ m, n, puddles, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(wayToSchool(m, n, puddles)).toBe(result))
  );
});
