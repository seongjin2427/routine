import FIFOScheduling from "./12920";

const testCases = [
  {
    n: 6,
    cores: [1, 2, 3],
    result: 2,
  },
];

describe("12920. 선입 선출 스케줄링", () =>
  testCases.forEach(({ n, cores, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(FIFOScheduling(n, cores)).toEqual(result))
  ));
