import convertStringToNumber from "./12925";

describe("12925. 문자열을 정수로 바꾸기", () => {
  it("case 1.", () => {
    const str = "-1234";

    expect(convertStringToNumber(str)).toEqual(-1234);
  });
});
