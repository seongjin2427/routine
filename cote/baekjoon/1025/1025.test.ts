import findSquareNumber from "./1025";

const testCases = [
  {
    input: `2 3
123
456`,
    result: 64,
  },
  {
    input: `5 5
00000
00000
00200
00000
00000`,
    result: 0,
  },
  {
    input: `6 7
3791178
1283252
4103617
8233494
8725572
2937261`,
    result: 320356,
  },
  {
    input: `5 9
135791357
357913579
579135791
791357913
913579135`,
    result: 9,
  },
  {
    input: `9 9
553333733
775337775
777537775
777357333
755553557
355533335
373773573
337373777
775557777`,
    result: -1,
  },
  {
    input: `9 9
257240281
197510846
014345401
035562575
974935632
865865933
684684987
768934659
287493867`,
    result: 95481,
  },
];

describe("1025. 제곱수 찾기", () => {
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(findSquareNumber(input)).toEqual(result))
  );
});
