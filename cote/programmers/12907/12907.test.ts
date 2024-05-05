import changes from "./12907";

describe("12907. 거스름돈", () => {
  it("case 1.", () => {
    const n = 5;
    const money = [1, 2, 5];

    expect(changes(n, money)).toEqual(4);
  });
});
