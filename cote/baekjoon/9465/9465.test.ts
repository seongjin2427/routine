import sticker from "./9465";

describe("9465. 스티커", () => {
  it("case 1.", () => {
    const input = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`;

    expect(sticker(input)).toEqual(`260
290`);
  });
});
