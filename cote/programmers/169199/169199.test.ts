import richochetRobot from "./169199";

describe("169199. 리코쳇 로봇", () => {
  it("case 1.", () => {
    const board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];

    expect(richochetRobot(board)).toEqual(7);
  });
  // it("case 2.", () => {
  //   const board = [".D.R", "....", ".G..", "...D"];

  //   expect(richochetRobot(board)).toEqual(-1);
  // });
});
