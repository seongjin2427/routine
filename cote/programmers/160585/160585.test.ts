import tictactoeAlone from "./160585";

const testCases = [
  {
    board: ["O.X", ".O.", "..X"],
    result: 1,
  },
  {
    board: ["OOO", "...", "XXX"],
    result: 0,
  },
  {
    board: ["...", ".X.", "..."],
    result: 0,
  },
  {
    board: ["...", "...", "..."],
    result: 1,
  },
  {
    board: ["OOO", "OOO", "OOO"],
    result: 0,
  },
];

describe("160585. 혼자서 하는 틱택토", () =>
  testCases.forEach(({ board, result }, index) =>
    it(`case ${index + 1}.`, () =>
      expect(tictactoeAlone(board)).toEqual(result))
  ));
