import bestSet from "./12938";

const inputs: { n: number; s: number; result: number[] }[] = [
  { n: 2, s: 9, result: [4, 5] },
  { n: 2, s: 1, result: [-1] },
  { n: 2, s: 8, result: [4, 4] },
];

describe("12938. 최고의 집합", () => {
  inputs.forEach(({ n, s, result }, index) =>
    it(`case ${index + 1}.`, () => expect(bestSet(n, s)).toEqual(result))
  );
});
