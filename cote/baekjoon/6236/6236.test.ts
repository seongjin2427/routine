import managePocketMoney from "./6236";

describe("6236. 용돈 관리", () => {
  it("case 1.", () => {
    const input = `7 5
100
400
300
100
500
101
400`;

    expect(managePocketMoney(input)).toEqual(500);
  });
});
