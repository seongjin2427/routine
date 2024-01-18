import solution from "./42577";

describe("42577. 전화번호 목록", () => {
  it("case 1.", () => {
    const phone_book = ["119", "97674223", "1195524421"];
    expect(solution(phone_book)).toEqual(false);
  });
  it("case 2.", () => {
    const phone_book = ["123", "456", "789"];
    expect(solution(phone_book)).toEqual(true);
  });
  it("case 3.", () => {
    const phone_book = ["12", "123", "1235", "567", "88"];
    expect(solution(phone_book)).toEqual(false);
  });
});
