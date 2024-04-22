import delivery from "./12978";

const testCases = [
  {
    N: 5,
    road: [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    K: 3,
    result: 4,
  },
  {
    N: 6,
    road: [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    K: 4,
    result: 4,
  },
];

describe("12978. 배달", () =>
  testCases.forEach(({ N, road, K, result }, index) =>
    it(`case ${index + 1}.`, () => expect(delivery(N, road, K)).toEqual(result))
  ));
