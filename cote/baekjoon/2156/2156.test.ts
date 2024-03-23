import tasteWine from "./2156";

describe("2156. 포도주 시식", () => {
  it("case 1.", () => {
    const input = `6
6
10
13
9
8
1`;

    expect(tasteWine(input)).toEqual(33);
  });
});
