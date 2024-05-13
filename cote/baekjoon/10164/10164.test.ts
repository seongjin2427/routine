import routeOnGrid from "./10164";

const testCases = [
  {
    input: "3 5 8",
    result: 9,
  },
  {
    input: "7 11 0",
    result: 8008,
  },
  {
    input: "7 11 76",
    result: 5005,
  },
];

describe("10164. 격자상의 경로", () =>
  testCases.forEach(({ input, result }, index) =>
    it(`case ${index + 1}.`, () => expect(routeOnGrid(input)).toEqual(result))
  ));
