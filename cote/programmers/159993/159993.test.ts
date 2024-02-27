import escapeMaze from "./159993";

describe("159993. 미로 탈출", () => {
  it("case 1.", () => {
    const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
    expect(escapeMaze(maps)).toEqual(16);
  });
  it("case 2.", () => {
    const maps = ["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"];
    expect(escapeMaze(maps)).toEqual(-1);
  });
});
