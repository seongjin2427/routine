import deathknight from "./16948";

describe("16948. 데스나이트", () => {
  it("case 1.", () => {
    const input = `7
6 6 0 1`;
    expect(deathknight(input)).toEqual(4);
  });
  it("case 2.", () => {
    const input = `6
5 1 0 5`;
    expect(deathknight(input)).toEqual(-1);
  });
  it("case 3.", () => {
    const input = `7
0 3 4 3`;
    expect(deathknight(input)).toEqual(2);
  });
});
