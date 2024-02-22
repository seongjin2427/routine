import insertOperators from "./14888";

describe("14888. 연산자 끼워넣기", () => {
  it("case 1.", () => {
    const input = `2
5 6
0 0 1 0`;

    expect(insertOperators(input)).toEqual(`30
30`);
  });
  it("case 2.", () => {
    const input = `3
3 4 5
1 0 1 0`;

    expect(insertOperators(input)).toEqual(`35
17`);
  });
  it("case 3.", () => {
    const input = `6
1 2 3 4 5 6
2 1 1 1`;

    expect(insertOperators(input)).toEqual(`54
-24`);
  });
});
