import solution from "./42885";

describe("42885. 구명보트", () => {
  it("case 1", () => {
    const people = [70, 50, 80, 50];
    const limit = 100;
    expect(solution(people, limit)).toBe(3);
  });
  it("case 2", () => {
    const people = [70, 80, 50];
    const limit = 100;
    expect(solution(people, limit)).toBe(3);
  });
  it("case 3", () => {
    const people = [50, 90, 80, 50];
    const limit = 100;
    expect(solution(people, limit)).toBe(3);
  });
});
