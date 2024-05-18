import plusOne from "./66";

const testCases = [
  {
    digits: [1, 2, 3],
    result: [1, 2, 4],
  },
  {
    digits: [4, 3, 2, 1],
    result: [4, 3, 2, 2],
  },
  {
    digits: [9],
    result: [1, 0],
  },
  {
    digits: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
    result: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
  },
];

describe("66. Plus One", () =>
  testCases.forEach(({ digits, result }, index) =>
    it(`case ${index + 1}.`, () => expect(plusOne(digits)).toEqual(result))
  ));
