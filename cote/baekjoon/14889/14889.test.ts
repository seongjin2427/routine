import startAndLink from "./14889";

describe("14889. 스타트와 링크", () => {
  it("case 1.", () => {
    const input = `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`;

    expect(startAndLink(input)).toEqual(0);
  });
  it("case 2.", () => {
    const input = `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`;

    expect(startAndLink(input)).toEqual(2);
  });
  it("case 3.", () => {
    const input = `8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`;

    expect(startAndLink(input)).toEqual(1);
  });
});
