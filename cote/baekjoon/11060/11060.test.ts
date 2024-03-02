import jumgJump from "./11060";

describe("11060. 점프 점프", () => {
  it("case 1.", () => {
    const input = `10
1 2 0 1 3 2 1 5 4 2`;

    expect(jumgJump(input)).toEqual(5);
  });
  it("case 2.", () => {
    const input = `10
0 2 0 1 3 2 1 5 4 2`;

    expect(jumgJump(input)).toEqual(-1);
  });
});
