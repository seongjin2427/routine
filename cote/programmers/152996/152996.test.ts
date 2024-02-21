import seesaw from "./152996";

describe("152996. 시소 짝꿍", () => {
  it("case 1.", () => {
    const weights = [100, 180, 360, 100, 270];
    expect(seesaw(weights)).toEqual(4);
  });
});
