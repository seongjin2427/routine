import hoseokTwoChicken from "./21278";

describe("21278. 호석이 두 마리 치킨", () => {
  it("case 1.", () => {
    const input = `5 4
1 3
4 2
2 5
3 2`;

    expect(hoseokTwoChicken(input)).toEqual("1 2 6");
  });
});
