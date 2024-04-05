import jump from "./1890";

describe("1890. 점프", () => {
  it("case 1.", () => {
    const input = `4
2 3 3 1
1 2 1 3
1 2 3 1
3 1 1 0`;

    expect(jump(input)).toEqual("3");
  });
});
