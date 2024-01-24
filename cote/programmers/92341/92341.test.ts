import solution from "./92341";

describe("92341. 주차 요금 계산", () => {
  it("case 1", () => {
    const fees = [180, 5000, 10, 600];
    const records = [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ];

    expect(solution(fees, records)).toEqual([14600, 34400, 5000]);
  });
  it("case 2", () => {
    const fees = [120, 0, 60, 591];
    const records = [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ];

    expect(solution(fees, records)).toEqual([0, 591]);
  });
  it("case 3", () => {
    const fees = [1, 461, 1, 10];
    const records = ["00:00 1234 IN"];

    expect(solution(fees, records)).toEqual([14841]);
  });
});
