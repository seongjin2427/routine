import theaterSeat from "./2302";

describe("2302. 극정 좌석", () => {
  it("case 1.", () => {
    const input = `9
2
4
7`;

    expect(theaterSeat(input)).toEqual(12);
  });
});
