import convertBrackets from "./60058";

describe("60058. 괄호 변환", () => {
  it("case 1.", () => {
    const p = "(()())()";
    expect(convertBrackets(p)).toEqual("(()())()");
  });
  it("case 2.", () => {
    const p = ")(";
    expect(convertBrackets(p)).toEqual("()");
  });
  it("case 3.", () => {
    const p = "()))((()";
    expect(convertBrackets(p)).toEqual("()(())()");
  });
  it("case 4.", () => {
    const p = "()";
    expect(convertBrackets(p)).toEqual("()");
  });
});
