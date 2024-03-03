import defenseGame from "./142085";

describe("142085. 디펜스 게임", () => {
  it("case 1.", () => {
    const n = 7;
    const k = 3;
    const enemy = [4, 2, 4, 5, 3, 3, 1];

    expect(defenseGame(n, k, enemy)).toEqual(5);
  });
  it("case 2.", () => {
    const n = 2;
    const k = 4;
    const enemy = [3, 3, 3, 3];

    expect(defenseGame(n, k, enemy)).toEqual(4);
  });
});
