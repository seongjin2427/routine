import sumYinyang from "./76501";

const testCases = [
  {
    absolutes: [4, 7, 12],
    signs: [true, false, true],
    result: 9,
  },
  {
    absolutes: [1, 2, 3],
    signs: [false, false, true],
    result: 0,
  },
];

describe("76501. 음양 더하기", () =>
  testCases.forEach(({ absolutes, signs, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(sumYinyang(absolutes, signs)).toEqual(result))
  ));
