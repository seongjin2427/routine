import collectStickers from "./12971";

const testCases = [
  {
    stickers: [14, 6, 5, 11, 3, 9, 2, 10],
    answer: 36,
  },
  {
    stickers: [1, 3, 2, 5, 4],
    answer: 8,
  },
];

describe("12971. 스티커 모으기", () =>
  testCases.forEach(({ stickers, answer }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(collectStickers(stickers)).toEqual(answer))
  ));
