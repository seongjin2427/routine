import stock from "./11501";

describe("11501. 주식", () => {
  it("case 1.", () => {
    const input = `4
3
10 7 6
3
3 5 9
5
1 1 3 1 2
5
2 2 2 2 3`;

    expect(stock(input)).toEqual(`0
10
5
4`);
  });
});
