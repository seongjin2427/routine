import solution from "./87946";

describe("87946. 피로도", () => {
  it("case 1.", () => {
    const k = 80;
    const dungeons = [
      [80, 20],
      [50, 40],
      [30, 10],
    ];

    expect(solution(k, dungeons)).toEqual(3);
  });
  it("case 2.", () => {
    const k = 1;
    const dungeons = [
      [80, 20],
      [50, 40],
      [30, 10],
    ];

    expect(solution(k, dungeons)).toEqual(0);
  });
  it("case 3.", () => {
    const k = 100;
    const dungeons = [
      [20, 20],
      [20, 20],
      [20, 20],
    ];

    expect(solution(k, dungeons)).toEqual(3);
  });
  it("case 4.", () => {
    const k = 40;
    const dungeons = [
      [40, 20],
      [10, 10],
      [10, 10],
      [10, 10],
      [10, 10],
    ];

    expect(solution(k, dungeons)).toEqual(4);
  });
});
