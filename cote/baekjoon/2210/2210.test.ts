import jumpNumberBoard from "./2210";

describe("2210. 숫자판 점프", () => {
  it("case 1.", () => {
    const input = `1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 2 1
1 1 1 1 1`;

    expect(jumpNumberBoard(input)).toEqual(15);
  });
});
