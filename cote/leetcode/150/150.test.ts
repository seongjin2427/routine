import evalRPN from "./150";

describe("150. Evaluate Reverse Polish Notation", () => {
  it("case 1.", () => {
    const tokens = ["2", "1", "+", "3", "*"];
    expect(evalRPN(tokens)).toEqual(9);
  });
  it("case 2.", () => {
    const tokens = ["4", "13", "5", "/", "+"];
    expect(evalRPN(tokens)).toEqual(6);
  });
  it("case 3.", () => {
    const tokens = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    expect(evalRPN(tokens)).toEqual(22);
  });
});
