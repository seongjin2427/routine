import regulationCamera from "./42884";

const testCases = [
  {
    routes: [
      [-20, -15],
      [-14, -5],
      [-18, -13],
      [-5, -3],
    ],
    result: 2,
  },
  {
    routes: [
      [-100, -10],
      [-20, -15],
      [-14, 30000],
      [-15, -5],
      [-15, -2],
    ],
    result: 2,
  },
];

describe("42884. 단속카메라", () => {
  testCases.forEach(({ routes, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(regulationCamera(routes)).toBe(result))
  );
});
