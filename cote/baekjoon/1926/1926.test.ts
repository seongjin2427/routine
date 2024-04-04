import image from "./1926";

describe("1926. 그림", () => {
  it("case 1.", () => {
    const input = `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`;

    expect(image(input)).toEqual(`4
9`);
  });
});
