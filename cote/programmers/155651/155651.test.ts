import reserveHotel from "./155651";

describe("155651. 호텔 대실", () => {
  it("case 1.", () => {
    const bookTime = [
      ["15:00", "17:00"],
      ["16:40", "18:20"],
      ["14:20", "15:20"],
      ["14:10", "19:20"],
      ["18:20", "21:20"],
    ];
    expect(reserveHotel(bookTime)).toEqual(3);
  });
  it("case 2.", () => {
    const bookTime = [
      ["09:10", "10:10"],
      ["10:20", "12:20"],
    ];
    expect(reserveHotel(bookTime)).toEqual(1);
  });
  it("case 3.", () => {
    const bookTime = [
      ["10:20", "12:30"],
      ["10:20", "12:30"],
      ["10:20", "12:30"],
    ];
    expect(reserveHotel(bookTime)).toEqual(3);
  });
  it("case 4.", () => {
    const bookTime = [
      ["10:20", "12:58"],
      ["10:30", "12:30"],
    ];
    expect(reserveHotel(bookTime)).toEqual(2);
  });
});
