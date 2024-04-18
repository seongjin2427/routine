import avoidFood from "./1743";

describe("1743. 음식물 피하기", () => {
  it("case 1.", () => {
    const input = `3 4 5
3 2
2 2
3 1
2 3
1 1`;

    expect(avoidFood(input)).toEqual(4);
  });
});
