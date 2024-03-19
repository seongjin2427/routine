import babbling2 from "./133499";

const testCases = [
  {
    babbling: ["aya", "yee", "u", "maa"],
    result: 1,
  },
  {
    babbling: ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"],
    result: 2,
  },
];

describe("133499. 옹알이 (2)", () =>
  testCases.forEach(({ babbling, result }, index) =>
    it(`case ${index + 1}`, () => expect(babbling2(babbling)).toEqual(result))
  ));
