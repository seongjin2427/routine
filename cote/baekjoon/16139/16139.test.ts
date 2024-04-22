import interactWithHumanAndComputer from "./16139";

const s = "s".padEnd(90_000, "s");

describe("16139. 인간-컴퓨터 상호작용", () => {
  it("case 1.", () => {
    const input = `seungjaehwang
4
a 0 5
a 0 6
a 6 10
a 7 10`;

    expect(interactWithHumanAndComputer(input)).toEqual(`0
1
2
1`);
  });
});
