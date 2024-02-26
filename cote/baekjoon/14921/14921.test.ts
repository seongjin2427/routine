import compoundSolution from "./14921";

describe("14921. 용액 합성하기", () => {
  it("case 1.", () => {
    const input = `5
-101 -3 -1 5 93`;
    expect(compoundSolution(input)).toEqual(2);
  });
  it("case 2.", () => {
    const input = `2
-100000 -99999`;
    expect(compoundSolution(input)).toEqual(-199999);
  });
  it("case 3.", () => {
    const input = `7
-698 -332 -123 54 531 535 699`;
    expect(compoundSolution(input)).toEqual(1);
  });
});
