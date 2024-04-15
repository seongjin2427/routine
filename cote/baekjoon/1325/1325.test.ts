import efficientHacking from "./1325";

describe("1325. 효율적인 해킹", () => {
  it("case 1.", () => {
    const input = `5 4
3 1
3 2
4 3
5 3`;

    expect(efficientHacking(input)).toEqual("1 2");
  });
});
