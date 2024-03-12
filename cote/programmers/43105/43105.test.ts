import integerTriangle from "./43105";

describe("43105. 정수 삼각형", () => {
  it("case 1.", () => {
    const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

    expect(integerTriangle(triangle)).toEqual(30);
  });
});
