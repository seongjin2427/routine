import bulbAndSwitch from "./2138";

describe("2138. 전구와 스위치", () => {
  it("case 1.", () => {
    const input = `3
000
010`;

    expect(bulbAndSwitch(input)).toEqual(3);
  });
});
