import coin1 from "./2293";

describe("2293. 동전 1", () => {
  it("case 1.", () => {
    const input = `3 10
1
2
5`;

    expect(coin1(input)).toEqual(10);
  });
});
