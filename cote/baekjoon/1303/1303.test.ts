import warFight from "./1303";

describe("1303. 전쟁 - 전투", () => {
  it("case 1.", () => {
    const input = `5 5
WBWWW
WWWWW
BBBBB
BBBWW
WWWWW`;

    expect(warFight(input)).toEqual("130 65");
  });
});
