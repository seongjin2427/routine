import divideTwoElectricalGrid from "./86971";

describe("86971. 전력망을 둘로 나누기", () => {
  it("case 1.", () => {
    const n = 9;
    const wires = [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [7, 8],
      [7, 9],
    ];
    expect(divideTwoElectricalGrid(n, wires)).toEqual(3);
  });
  it("case 2.", () => {
    const n = 4;
    const wires = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    expect(divideTwoElectricalGrid(n, wires)).toEqual(0);
  });
  it("case 3.", () => {
    const n = 7;
    const wires = [
      [1, 2],
      [2, 7],
      [3, 7],
      [3, 4],
      [4, 5],
      [6, 7],
    ];
    expect(divideTwoElectricalGrid(n, wires)).toEqual(1);
  });
});
