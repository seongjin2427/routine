import jumpLog from "./11497";

describe("11497. 통나무 건너뛰기", () => {
  it("case 1.", () => {
    const input = `3
7
13 10 12 11 10 11 12
5
2 4 5 7 9
8
6 6 6 6 6 6 6 6`;

    expect(jumpLog(input)).toEqual(`1
4
0`);
  });
});
