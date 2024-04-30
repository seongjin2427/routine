import additionFive from "./15990";

describe("15990. 1, 2, 3 더하기 5", () => {
  it("case 1.", () => {
    const input = `3
4
7
10`;

    expect(additionFive(input)).toEqual(`3
9
27`);
  });
});
