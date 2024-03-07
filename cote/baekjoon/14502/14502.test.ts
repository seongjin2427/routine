import lab from "./14502";

describe("14502. 연구소", () => {
  it("case 1.", () => {
    const input = `7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 0 0 1 1
0 1 0 0 0 0 0
0 1 0 0 0 0 0`;

    expect(lab(input)).toEqual(27);
  });
  it("case 2.", () => {
    const input = `4 6
0 0 0 0 0 0
1 0 0 0 0 2
1 1 1 0 0 2
0 0 0 0 0 2`;

    expect(lab(input)).toEqual(9);
  });
  it("case 3.", () => {
    const input = `8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`;

    expect(lab(input)).toEqual(3);
  });
});
