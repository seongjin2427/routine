import tetromino from "./14500";

describe("14500. 테트로미노", () => {
  it("case 1.", () => {
    const input = `5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`;

    expect(tetromino(input)).toEqual(19);
  });
  it("case 2.", () => {
    const input = `4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`;

    expect(tetromino(input)).toEqual(20);
  });
  it("case 3.", () => {
    const input = `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`;

    expect(tetromino(input)).toEqual(7);
  });
});
