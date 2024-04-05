import donutAndBarGraph from "./258711";

const testCases = [
  {
    edges: [
      [2, 3],
      [4, 3],
      [1, 1],
      [2, 1],
    ],
    result: [2, 1, 1, 0],
  },
  {
    edges: [
      [4, 11],
      [1, 12],
      [8, 3],
      [12, 7],
      [4, 2],
      [7, 11],
      [4, 8],
      [9, 6],
      [10, 11],
      [6, 10],
      [3, 5],
      [11, 1],
      [5, 3],
      [11, 9],
      [3, 8],
    ],
    result: [4, 0, 1, 2],
  },
];

describe("258711. 도넛과 막대 그래프", () =>
  testCases.forEach(({ edges, result }, index) =>
    it(`case ${index + 1}`, () =>
      expect(donutAndBarGraph(edges)).toEqual(result))
  ));
