import hanoiMoveOrder from "./11729";

describe("11729. 하노이 탑 이동 순서", () => {
  it("case 1.", () => {
    const input = "3";
    expect(hanoiMoveOrder(input)).toEqual(`7
1 3
1 2
3 2
1 3
2 1
2 3
1 3`);
  });
});
