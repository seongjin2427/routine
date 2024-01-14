import solution from "./17680";

describe("17680. 캐시", () => {
  it("case 1.", () => {
    const cacheSize = 3;
    const cities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
    ];

    expect(solution(cacheSize, cities)).toEqual(50);
  });
  it("case 2.", () => {
    const cacheSize = 3;
    const cities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
    ];

    expect(solution(cacheSize, cities)).toEqual(21);
  });
  it("case 3.", () => {
    const cacheSize = 2;
    const cities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ];

    expect(solution(cacheSize, cities)).toEqual(60);
  });
  it("case 4.", () => {
    const cacheSize = 5;
    const cities = [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ];

    expect(solution(cacheSize, cities)).toEqual(52);
  });
  it("case 5.", () => {
    const cacheSize = 2;
    const cities = ["Jeju", "Pangyo", "NewYork", "newyork"];

    expect(solution(cacheSize, cities)).toEqual(16);
  });
  it("case 6.", () => {
    const cacheSize = 0;
    const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

    expect(solution(cacheSize, cities)).toEqual(25);
  });
  it("case 7.", () => {
    const cacheSize = 0;
    const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "LA", "LA"];

    expect(solution(cacheSize, cities)).toEqual(35);
  });
});
