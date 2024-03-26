import findNumberWithRemainderOne from "./87389";

const testCases = [
  {
    n: 10,
    result: 3,
  },
  {
    n: 12,
    result: 11,
  },
];

describe("87389. 나머지가 1이 되는 수 찾기", () =>
  testCases.forEach(({ n, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(findNumberWithRemainderOne(n)).toEqual(result))
  ));
