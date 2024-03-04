import expertOfPlayAlone from "./131130";

describe("131130. 혼자 놀기의 달인", () => {
  it("case 1.", () => {
    const cards = [8, 6, 3, 7, 2, 5, 1, 4];

    expect(expertOfPlayAlone(cards)).toEqual(12);
  });
});
