import divisorSum from "./12928";

describe("12928. 약수의 합", () => {
  it("case 1.", () => {
    const n = 12;

    expect(divisorSum(n)).toEqual(28);
  });
  it("case 2.", () => {
    const n = 5;

    expect(divisorSum(n)).toEqual(6);
  });
});
