import harshadNumber from "./12947";

const testCases = [
  {
    x: 10,
    result: true,
  },
  {
    x: 12,
    result: true,
  },
  {
    x: 11,
    result: false,
  },
  {
    x: 13,
    result: false,
  },
];

describe("12947. 하샤드 수", () =>
  testCases.forEach(({ x, result }, index) =>
    it(`case ${index + 1}.`, () => expect(harshadNumber(x)).toEqual(result))
  ));
